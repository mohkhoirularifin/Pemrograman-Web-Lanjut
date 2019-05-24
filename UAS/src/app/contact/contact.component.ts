import { Component, OnInit } from '@angular/core';
import {FormGroup, FormControl, Validators} from '@angular/forms';

class MyData{
  constructor(
    public labelData: string = 'Your Data',
    public labelName: string = 'Username',
    public labelEmail: string = 'Email',
    public labelMessage: string = 'Message',
    public username: string = '',
    public email: string = '',
    public pesan: string = ''
  ) {}
}

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit{
  inputData: MyData[] = [];
  inputModel: MyData;
  submitType: string = "Save";
  

  form = new FormGroup({
    nama: new FormControl('', Validators.required),
    email: new FormControl('', [
      Validators.required,
      Validators.email
    ])
  });

  get email() {
    return this.form.get("email");
  }

  get message() {
    return this.form.get("email");
  }

  onSave() {
    if (this.submitType === "Save") {
      this.inputData.push(this.inputModel);
    }
  }

  onNew() {
    this.inputModel = new MyData();
    this.submitType = "Save";
  }
  
  constructor() {}

  ngOnInit(){}
}


