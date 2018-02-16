import { Component, OnInit } from '@angular/core';
import { trigger,style,transition,animate,keyframes,query,stagger } from '@angular/animations';
import { DataService } from '../data.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  animations: [
    trigger('cleans', [
      transition('* => *', [
        query(':enter', style({ opacity: 0}), {optional: true}),

        query(':enter', stagger('400ms', [
          animate('.6s ease-in', keyframes([
            style({opacity: 0, transform: 'translateY(-75%)', offset: 0}),
            style({opacity: .5, transform: 'translateY(35px)', offset: .3}),
            style({opacity: 1, transform: 'translateY(0)', offset: 1}),
          ]))]), {optional: true}),

          query(':leave', stagger('250ms', [
            animate('.6s ease-in', keyframes([
              style({opacity: 1, transform: 'translateY(0)', offset: 0}),
              style({opacity: .5, transform: 'translateY(35px)', offset: .3}),
              style({opacity: 0, transform: 'translateY(-75%)', offset: 1}),
            ]))]), {optional: true}),
      ])
    ])
  ]
})
export class HomeComponent implements OnInit {

  itemCount: number;
  btnText: string = 'Add To List';
  cleanText: string = '';
  cleans = [];

  constructor(private _data: DataService) { }

  ngOnInit() {
   this._data.clean.subscribe(res => this.cleans = res);
   this.itemCount = this.cleans.length;
   this._data.changeClean(this.cleans);
  }

  addItem(){
    this.cleans.push(this.cleanText);
    this.cleanText = '';
    this.itemCount = this.cleans.length;
    this._data.changeClean(this.cleans);

  }

  removeItem(i) {
    this.cleans.splice(i,1);
    this.itemCount = this.cleans.length;
    this._data.changeClean(this.cleans);

  }

}
