import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private router: Router) { }

  username: string;
  password: string;
  ngOnInit() {
  }

  login() : void{
    if(this.username == 'khoirul' && this.password == 'khoirul'){
      this.router.navigate(["/add"]);
    }else{
      alert("Invalid Credentials");
    }
  }
}
