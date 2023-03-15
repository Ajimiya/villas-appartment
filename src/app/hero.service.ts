import { Injectable } from '@angular/core';
import { villas,apartments } from 'src/assets/data';


@Injectable({
  providedIn: 'root'
})
export class HeroService {

  constructor() { }
  giveData()
  {
    return apartments
  }
  giveData1()
  {
    return villas
  }
}
