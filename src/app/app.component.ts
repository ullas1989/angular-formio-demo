import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  choiceJsData: any;
  html5Data: any;

  onChangeChoiceJs(event) {
    if (event.data) {
      this.choiceJsData = JSON.stringify(event.data);
    }
  }

  onChangeHtml5(event) {
    if (event.data) {
      this.html5Data = JSON.stringify(event.data);
    }
  }
}
