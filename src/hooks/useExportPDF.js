
import { useState } from 'react';
import html2canvas from 'html2canvas';
import { jsPDF } from 'jspdf';

export const useExportPDF = () => {
  const [isExporting, setIsExporting] = useState(false);

  const exportPDF = async (elementId, fileName = 'Resume.pdf') => {
    const element = document.getElementById(elementId);
    if (!element) return;

    setIsExporting(true);

    try {
      // Hide grain overlay and other non-essential elements if they exist
      const grainOverlay = document.querySelector('.grain-overlay');
      if (grainOverlay) grainOverlay.style.display = 'none';

      const canvas = await html2canvas(element, {
        scale: 2, // Higher resolution for printing
        useCORS: true,
        logging: false,
        backgroundColor: '#ffffff',
        windowWidth: element.scrollWidth,
        windowHeight: element.scrollHeight
      });

      const imgData = canvas.toDataURL('image/png', 1.0);
      
      const pdf = new jsPDF({
        orientation: 'portrait',
        unit: 'mm',
        format: 'a4'
      });

      const imgProps = pdf.getImageProperties(imgData);
      const pdfWidth = pdf.internal.pageSize.getWidth();
      const pdfHeight = (imgProps.height * pdfWidth) / imgProps.width;
      
      // If content is longer than one page, we might need multiple pages
      // But for a resume, usually one long page or multiple A4 pages is fine
      // Here we fit it to width and let it flow. 
      // Most resumes are 1-2 pages.
      
      pdf.addImage(imgData, 'PNG', 0, 0, pdfWidth, pdfHeight);
      
      pdf.save(fileName);

      // Restore grain overlay
      if (grainOverlay) grainOverlay.style.display = 'block';
    } catch (error) {
      console.error('PDF Export Error:', error);
    } finally {
      setIsExporting(false);
    }
  };

  return { exportPDF, isExporting };
};
