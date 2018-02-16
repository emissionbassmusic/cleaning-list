import { Injectable } from '@angular/core';
import {BehaviorSubject } from 'rxjs/BehaviorSubject';

@Injectable()
export class DataService {

  private cleans = new BehaviorSubject<any>([]);
  clean = this.cleans.asObservable();

  private orgs = new BehaviorSubject<any>([]);
  org = this.orgs.asObservable();


  constructor() { }

changeClean(clean) {
  this.cleans.next(clean);
}

changeOrg(org) {
  this.orgs.next(org);
}
  
}
