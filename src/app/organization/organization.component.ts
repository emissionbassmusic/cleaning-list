import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router';
import { DataService } from '../data.service';
import { trigger,style,transition,animate,keyframes,query,stagger } from '@angular/animations';


@Component({
  selector: 'app-organization',
  templateUrl: './organization.component.html',
  styleUrls: ['./organization.component.scss'],
  animations: [
    trigger('orgs', [
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
export class OrganizationComponent implements OnInit {

  cleans: any;
  itemCount2: number;
  btnText: string = 'Add';
  orgText: string = '';
  orgs = [];

  constructor(private route: ActivatedRoute, private router: Router, private _data: DataService) { 
    this.route.params.subscribe(res => console.log(res.id));


  }

  ngOnInit() {
    this._data.clean.subscribe(res => this.orgs = res);
    this._data.org.subscribe(res => this.orgs = res);
   this.itemCount2 = this.orgs.length;
   this._data.changeOrg(this.orgs);
  }

  addItem(){
    this.orgs.push(this.orgText);
    this.orgText = '';
    this.itemCount2 = this.orgs.length;
    this._data.changeOrg(this.orgs);

  }

  removeItem(i) {
    this.orgs.splice(i,1);
    this.itemCount2 = this.orgs.length;
    this._data.changeOrg(this.orgs);

  }

  sendMeHome(){
    this.router.navigate(['']);
  }

}
