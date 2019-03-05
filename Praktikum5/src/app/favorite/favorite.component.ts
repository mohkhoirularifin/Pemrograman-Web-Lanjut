import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-favorite',
  templateUrl: './favorite.component.html',
  styleUrls: ['./favorite.component.css'],
  // inputs: ['isFavorite']
})
export class FavoriteComponent implements OnInit {

  @Input() isFavorite:boolean;
  // isFavorite:boolean;
  @Input('aliasFavorite') isSelected:boolean;

  constructor() { }

  ngOnInit() {
  }

  onClick(){
    this.isFavorite=!this.isFavorite;
  }

  onClickAlias(){
    this.isFavorite=!this.isFavorite;
  }

}
