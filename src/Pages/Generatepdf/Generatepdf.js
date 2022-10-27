
import jsPDF from 'jspdf';
import React from 'react';
import { Button } from 'react-bootstrap';
import { useLoaderData } from 'react-router-dom';



const Generatepdf = () => {
    const getpdfdata = useLoaderData();
    const { instructorname, overview, courseimg } = getpdfdata;

    const pdfGenerate = () => {

        var doc = new jsPDF('landscape', 'px', 'legal', 'false');
        doc.addPage()
        // doc.addImage(65, 20, 500, 400, 'PNG', `${courseimg}`)
        doc.text(80, 50, `${instructorname}`)

        doc.text(80, 60, `${overview}`)
        doc.save('coursedetails.pdf')
    }
    return (
        <div>
            <Button onClick={pdfGenerate}>Download pdf</Button>

        </div>
    );
};

export default Generatepdf;