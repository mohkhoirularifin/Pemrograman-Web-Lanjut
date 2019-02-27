import { Component, OnInit } from '@angular/core';
import { CoursesService } from '../courses.service';

@Component({
  selector: 'app-courses',
  templateUrl: './courses.component.html',
  styleUrls: ['./courses.component.css']
})
export class CoursesComponent implements OnInit {

  // tittle = 'Belajar Angular';
  // tittle = 'Angular';
  // tittle2 = '3 Author';
  tittle3 = "INI Tugas Pertama Biodata";
  tittle4 = "Nama: Moh. Khoirul Arifin";
  tittle5 = "Alamat: Jl. Semanggi Barat No. 28";
  tittle6 = "Hobby Saya";
  date = new Date();
  get format(){
    return 'fullDate';
  }
  Courses;
  

  constructor(private service:CoursesService) { 
    this.Courses=service.getCourses();
  }

  ngOnInit() {
  }

}
