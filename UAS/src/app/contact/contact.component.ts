import { Component, Input } from '@angular/core';
import { formArrayNameProvider } from '@angular/forms/src/directives/reactive_directives/form_group_name';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent{
  yourData: boolean;

  data=[
    {nama: '', email: '', comment: ''}
  ]

  log(x){
    console.log(x);
  }

  submit(form){
    this.yourData = true;
  }
}


