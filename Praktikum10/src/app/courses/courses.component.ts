import { Component, OnInit } from '@angular/core';
import { CoursesService } from '../courses.service';

@Component({
  selector: 'app-courses',
  templateUrl: './courses.component.html',
  styleUrls: ['./courses.component.css']
})
export class CoursesComponent implements OnInit {

  tittle = 'Belajar Angular';
  Courses;

  binding = 'property-binding';
  imageUrl = 'http://lorempixel.com/400/200';
  percobaan = 'ini percobaan';
  colSpan = 2;
  isActive=false;
  nama = 'Khoirul';

  onSave($event){
    $event.stopPropagation();
    console.log("onSave Sudah diKlick", $event);
  }

  onDivClick($event){
    console.log("onDivClick Sudah diKlick", $event);
  }

  onKeyUp(nama){
    console.log(this.nama);
  }

  constructor(private service:CoursesService) { 
    this.Courses=service.getCourses();
  }

  ngOnInit() {
  }

}
