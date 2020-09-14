import { Component } from "@angular/core";
import {jsPDF} from "jspdf";
import html2canvas from "html2canvas";
import domtoimage from 'dom-to-image'
import { $ } from 'protractor';

@Component({
  selector: "app-home",
  templateUrl: "home.page.html",
  styleUrls: ["home.page.scss"],
})
export class HomePage {
  capturedImage;
  
  constructor() {}

  printManual() {
    var prtContent = document.getElementById("container");
    var WinPrint = window.open(
      "",
      "",
      "left=0,top=0,width=250,height=300,toolbar=0,scrollbars=0,status=0"
    );
    WinPrint.document.write(prtContent.innerHTML);
    WinPrint.document.close();
    WinPrint.focus();
    WinPrint.print();
    // WinPrint.close();
  }
  printPage() {
    window.print();
  }

  convertToImage() {
    let result = document.querySelector("#result");
    let container = document.querySelector("#container");

    domtoimage.toJpeg(container).then( dataUrl => {
      var img = new Image();
      img.src = dataUrl;
      result.appendChild(img);

      var link = document.createElement('img')
      link.src = dataUrl
      
      var WinPrint = window.open(
        "",
        "",
        "left=0,top=0,width=800,height=900,toolbar=0,scrollbars=0,status=0"
      );
    
      WinPrint.document.write(link.outerHTML);
      WinPrint.document.close();
      WinPrint.focus();
      WinPrint.print();
    })
  }
}
