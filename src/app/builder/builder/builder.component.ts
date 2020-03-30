import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { FormBuilderComponent } from 'angular-formio';
import { HttpClient } from '@angular/common/http';

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

  public form: any;

  constructor(private http: HttpClient) { }

  ngOnInit(): void {
    /* this.http.get('http://localhost:5063/formio/getschema/12060380').subscribe((val: any) => {
      this.form = val.schema;
    }); */
    this.form = (data as any).default.schema;
  }

  onDisplaySelect(event) {
    const value = event.target.value;
    this.builder.setDisplay(value);
  }

  onChange(event) {
    this.formSchema = {
      schema: event.form
    };
    this.jsonElement.nativeElement.innerHTML = '';
    this.jsonElement.nativeElement.appendChild(document.createTextNode(JSON.stringify(event.form, null, 4)));
  }

  saveSchema() {
    /* let requestData = '';

    if (this.formSchema) {
      requestData = JSON.stringify(this.formSchema);
    } else {
      requestData = JSON.stringify({ schema: this.form });
    }
    this.http.post('http://localhost:5063/formio/addschema/4BA4AC73-FCB0-478E-BF54-D139935081B2', requestData).subscribe();
 */
  }

  refreshSchema() {
    /* this.http.get('http://localhost:5063/formio/getschema/12060380').subscribe((val: any) => {
      this.form = val.schema;
    }); */
  }
}
