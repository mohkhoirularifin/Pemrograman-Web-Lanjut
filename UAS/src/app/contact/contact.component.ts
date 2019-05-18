import { Component, Input } from '@angular/core';
import { formArrayNameProvider } from '@angular/forms/src/directives/reactive_directives/form_group_name';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent{
  @Input() nama:string;
  @Input() email:string;
  @Input() comment:string;

  log(z){
    console.log(z);
  }

  submit(form){
    console.log(form);
    form.valid;
  }
}


