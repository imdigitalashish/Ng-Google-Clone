import { Injectable } from '@angular/core';
import { API_KEY } from '../keys';
@Injectable({
  providedIn: 'root'
})
export class ResultsService {

  name = "ashish"
  term = null;

  CONTEXT_KEY = "70d2cb4c76243f13a"

  data: any;

  constructor() { }

  changeName(newName: any) {
    this.name = newName;
  }

  setTerm(newTerm: any) {
    console.log("FROM TERM " + newTerm);
    this.term = newTerm
  }



}
