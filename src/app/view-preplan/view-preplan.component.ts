import { Component, OnInit } from '@angular/core';
import { PreplansService } from '../preplans.service';

// import * as jsPDF from 'jspdf';
// import * as html2canvas from 'html2canvas';

declare var html2pdf:any;

@Component({
  selector: 'app-view-preplan',
  templateUrl: './view-preplan.component.html',
  styleUrls: ['./view-preplan.component.scss']
})
export class ViewPreplanComponent implements OnInit {

  preplan:any;

  constructor(private preplans:PreplansService) {
    this.preplan = this.preplans.current_preplan;

    this.preplans.preplanChange$.subscribe(() => {
      this.preplan = this.preplans.current_preplan;
    })
  }

  ngOnInit() {
  }

  createPDF() {
    // window["html2canvas"] = html2canvas;
    // let pdf = new jsPDF('p', 'pt', 'letter');
    //
    // //let source = $('#view-content')[0];
    // //
    //
    // pdf.html(document.getElementById('view-content'), {maging: 0.5, callback: (pdf2) => {
    //   pdf2.save('Test.pdf');
    // }});

    // html2pdf(document.getElementById('view-content'), {
    //   margin: 0.25,
    //   filename: 'test.pdf',
    //   jsPDF: { unit: 'in', format: 'letter', orientation: 'portrait' },
    //   pagebreak: { mode: ['avoid-all', 'css', 'legacy']}
    // });

    html2pdf().from(document.getElementById('view-content')).set({
      margin: [0.25, 0.25, 0.4, 0.25],
      filename: 'test.pdf',
      jsPDF: { unit: 'in', format: 'letter', orientation: 'portrait' },
      pagebreak: { mode: ['avoid-all', 'css', 'legacy']}
    }).toPdf().get('pdf').then((pdf) => {
      var totalPages = pdf.internal.getNumberOfPages();

      for(let i = 1; i <= totalPages; i++) {
        pdf.setPage(i);
        pdf.setDrawColor(150);
        pdf.setLineWidth(0.01);
        pdf.line(0.25, 10.3, 8.25, 10.3);
        pdf.setFontSize(10);
        pdf.setTextColor(173, 216, 230);
        pdf.textWithLink('Created using Preplan and Protect - PreplanAndProtect.com', 0.25, 10.5, {url: 'https://preplanandprotect.com'});
        pdf.setTextColor(150);
        pdf.text('File version ' + this.preplan.version, 5.75, 10.5);
        pdf.text('Created on ' + new Date(this.preplan.created).toLocaleString(), 0.25, 10.7);
        pdf.text('Updated on ' + new Date(this.preplan.updated).toLocaleString(), 5.75, 10.7);
        pdf.text('Page ' + i + ' of ' + totalPages, 4, 10.70);
      }
    }).save();

    // let margins = {
    //   top: 36,
    //   bottom: 36,
    //   left: 36,
    //   width: 540
    // };
    //
    // pdf.fromHTML(
    //   source,
    //   margins.left,
    //   margins.top, {
    //     'width': margins.width,
    //   },
    //   (dispose) => {
    //     pdf.save('Test.pdf');
    //   }, margins
    // );
  }

}
