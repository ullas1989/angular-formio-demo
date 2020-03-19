import { Component, ViewChild, ElementRef } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  @ViewChild('json') jsonElement?: ElementRef;
  public formRenderer: any;
  public form: any = {
    components: []
  };

  onSubmit(event) {
    console.log('data', event);
  }
}
