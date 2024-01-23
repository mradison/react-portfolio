import React from "react";
import { pdfjs } from "react-pdf";

pdfjs.GlobalWorkerOptions.workerSrc = new URL(
  "pdfjs-dist/build/pdf.worker.min.js",
  import.meta.url
).toString();

import { useState } from "react";
import { Document, Page } from "react-pdf";
import madisonResume from "../assets/madisonResume.pdf";

export default function ResumePage() {
  const [numPages, setNumPages] = useState();
  const [pageNumber, setPageNumber] = useState(1);

  function onDocumentLoadSuccess({ numPages }) {
    setNumPages(numPages);
  }

  return (
    <div className="pdf-div">
      <Document file={madisonResume} onLoadSuccess={onDocumentLoadSuccess}>
        {Array.apply(null, Array(numPages))
          .map((x, i) => i + 1)
          .map((page) => {return(
            <Page
              pageNumber={page}
              renderTextLayer={false}
              renderAnnotationLayer={false}
            />);
          })}
      </Document>

    </div>
  );
}

// const ResumePage = () => {
//  return (
//  <div>

//   {/* <ReactPDF
//   file={{
//     url: 'https://docs.google.com/document/d/18ChacLfHr7czuSs4zNrNjVz3UWXDZ2zBwuIQazS-7n4/edit'
//   }}
// />
//  <iframe src="../assets/madisonResume.pdf" width="100%" height="500px" /> */}
//  </div>
//  );
// };
// export default ResumePage;

// import React from 'react';
// import { Document, Page } from 'react-pdf';

// const ResumePage = () => {
//  const pdfURL = '../assets/madisonResume.pdf';
// return (
//  <div>
//  <Document file={pdfURL}>
//  <Page pageNumber={1} />
//  </Document>
//  </div>
//  );
// };
// export default ResumePage;

// import { useState } from 'react';
// import { Document, Page } from 'react-pdf';

// import { pdfjs } from 'react-pdf';
// import madisonResume from "../assets/madisonResume.pdf";

// export default function ResumePage() {
//     return (
//       {madisonResume},

//       <div className="container pt-4">
// Madison Reynolds
// {pdfjs.GlobalWorkerOptions.workerSrc = new URL(
//         'pdfjs-dist/build/pdf.worker.min.js',
//         import.meta.url,
//       ).toString()},
//       </div>
//     );
//   }
