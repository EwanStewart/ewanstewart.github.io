import React, { useState } from 'react';
import { Document, Page } from 'react-pdf';

const PDFViewer = () => {
  const [numPages, setNumPages] = useState<number | null>(null); // Explicit type annotation

  const onDocumentLoadSuccess = ({ numPages }: { numPages: number }) => {
    setNumPages(numPages);
  };

  return (
    <div>
      <Document
        file="CV.pdf"
        onLoadSuccess={onDocumentLoadSuccess}
      >
        <Page pageNumber={1} />
      </Document>
      <p>
        Page 1 of {numPages}
      </p>
    </div>
  );
};

export default PDFViewer;
