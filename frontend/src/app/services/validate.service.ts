import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ValidateService {

  constructor() { }

//ellenorzom hogy minden mezo ki van-e toltve
  kiVanToltve(felhasznalo){
    if(felhasznalo.nev == undefined || felhasznalo.felhasznalonev == undefined ||
       felhasznalo.email == undefined || felhasznalo.jelszo == undefined) return false;
      else return true;
  }

//lab2-bol hasznalt minta alapjan ellenorzom az email helyesseget
  helyesEmail(email)
  {
    var minta = /^[^@]+@(yahoo|gmail|hotmail|freemail)\.[a-z]*/;
    return minta.test(email);

  }

}
