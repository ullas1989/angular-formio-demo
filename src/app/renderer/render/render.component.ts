import { Component, OnInit } from '@angular/core';

import * as data from '../../file.json';

@Component({
  selector: 'app-render',
  templateUrl: './render.component.html',
  styleUrls: ['./render.component.scss']
})
export class RenderComponent implements OnInit {
  public schema: any;

  formIoOptions: any = {
    disableAlerts: true,
    noAlerts: false,
    errors: {
      message: 'Please correct all highlighted errors and try again'
    },
    alerts: {
      submitMessage: 'Form submitted successfully'
    }
  };
  constructor() { }

  ngOnInit(): void {
    console.log('schema', (data as any).default);
    this.schema = (data as any).default.schema;
  }

}
