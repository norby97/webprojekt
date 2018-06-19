import { Injectable } from '@angular/core';
import { RegLoginService } from '../services/reglogin.service';
@Injectable({
  providedIn: 'root'
})
export class ValidateService {

  constructor(
    private regloginService :RegLoginService
  ) { }

//ellenorzom hogy minden mezo ki van-e toltve
  kiVanToltve(felhasznalo){
    if(felhasznalo.nev == undefined || felhasznalo.felhasznalonev == undefined ||
       felhasznalo.email == undefined || felhasznalo.jelszo == undefined) return false;
      else return true;
  }


  //megnezzuk hogy letezik-e mar az adott felhasznalonev
  letezikMar(felhasznalo){
  this.regloginService.ranglistaLekeres().subscribe(felhasznalok => {

    for(let i in felhasznalok){
      console.log(felhasznalok[i].felhasznalonev + " " + felhasznalo.felhasznalonev )
        if(felhasznalok[i].felhasznalonev === felhasznalo.felhasznalonev){
          return false;
        }
    }
    return true;
  }, err =>{
    console.log(err);
    return false;
  });

}

//lab2-bol hasznalt minta alapjan ellenorzom az email helyesseget
  helyesEmail(email)
  {
    var minta = /^[^@]+@(yahoo|gmail|hotmail|freemail)\.[a-z]*/;
    return minta.test(email);

  }

}
