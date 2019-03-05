import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

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

  @Output() change = new EventEmitter();

  constructor() { }

  ngOnInit() {
  }

  onClick(){
    this.isFavorite=!this.isFavorite;
  }

  onClickAlias(){
    this.isSelected=!this.isSelected;
    // this.change.emit(this.isSelected);
    this.change.emit({newValue:this.isSelected});
  }

}
