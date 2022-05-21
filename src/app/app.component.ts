import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'portfolio';

  onDownloadClick(): void {
    console.log("click en descargas de cv");
    const downloadInstance = document.createElement('a');
    downloadInstance.href = 'http://localhost:4200/assets/barbaraCortezCV.pdf';
    downloadInstance.target = '_blank';
    downloadInstance.download = 'Barbara Cortez CV';

    document.body.appendChild(downloadInstance);
    downloadInstance.click();
    document.body.removeChild(downloadInstance);
  }
}
