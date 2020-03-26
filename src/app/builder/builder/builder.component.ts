import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { FormBuilderComponent } from 'angular-formio';

import * as data from '../../file.json';

@Component({
  selector: 'app-builder',
  templateUrl: './builder.component.html',
  styleUrls: ['./builder.component.scss']
})
export class BuilderComponent implements OnInit {
  builderTypes = [{ type: 'form', display: 'Form' }, { type: 'wizard', display: 'Wizard' }];
  formSchema: any;

  @ViewChild('json') jsonElement?: ElementRef;
  @ViewChild(FormBuilderComponent, { static: false }) builder: FormBuilderComponent;

  public form: any = {
    components: []
  };

  constructor() { }

  ngOnInit(): void {
    this.form = (data as any).default;
  }

  onDisplaySelect(event) {
    const value = event.target.value;
    this.builder.setDisplay(value);
  }

  onChange(event) {
    this.formSchema = JSON.stringify(event.form, null, 4);
    this.jsonElement.nativeElement.innerHTML = '';
    this.jsonElement.nativeElement.appendChild(document.createTextNode(JSON.stringify(event.form, null, 4)));
  }

  saveSchema() {

  }

  refreshSchema() {

  }
}
