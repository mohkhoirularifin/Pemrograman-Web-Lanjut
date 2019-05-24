import { Component } from '@angular/core';
import { FilterPipe } from 'ngx-filter-pipe';

@Component({
  selector: 'app-add-friends',
  templateUrl: './add-friends.component.html',
  styleUrls: ['./add-friends.component.css']
})
export class AddFriendsComponent {
  userFilter: any = { name: '' };
  
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

  constructor(private filterPipe: FilterPipe) {
    console.log(filterPipe.transform(this.friends, { name: ''}));
  }
}
