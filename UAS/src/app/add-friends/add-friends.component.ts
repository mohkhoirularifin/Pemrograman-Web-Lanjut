import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-add-friends',
  templateUrl: './add-friends.component.html',
  styleUrls: ['./add-friends.component.css']
})
export class AddFriendsComponent {

  log(z){
    console.log(z);
  }

  submit(form){
    console.log(form);
    form.valid;
  }
}
