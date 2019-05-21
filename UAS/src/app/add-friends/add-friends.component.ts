import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-add-friends',
  templateUrl: './add-friends.component.html',
  styleUrls: ['./add-friends.component.css']
})
export class AddFriendsComponent {
  name: string;
  friends=[
    {id:1, name: "Angga", email: "angga@addAllToArray.com", contact: "097654345667"}
  ]

  submit(form){
    this.friends.push({id: this.friends.length +1, name: this.uppercase(form.nama), email: form.email,contact: form.contact});
    form.valid;
  }

  uppercase(nama){
    return nama.toUpperCase();
  }

  search(){
    this.friends.filter(res =>{
      return res.name.toLocaleLowerCase().match(this.name.toLocaleLowerCase());
    });
  }
}
