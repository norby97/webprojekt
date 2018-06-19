import { Component, OnInit, OnDestroy } from '@angular/core';
import { GameService } from '../../services/game.service';
import { RegLoginService } from '../../services/reglogin.service';
import { FlashMessagesService } from 'angular2-flash-messages';
import 'rxjs/add/operator/map';


@Component({
  selector: 'app-game',
  templateUrl: './game.component.html',
  styleUrls: ['./game.component.css']
})
export class GameComponent implements OnInit , OnDestroy{

  kerdes: {
    kerdes: String,
    valasz1: String,
    valasz2: String,
    valasz3: String,
    valasz4: String,
    helyes: 0
    // nem tudom hogy nevezed a helyes sorszamot
  };
  felhasznalo: {
    felhasznalonev:String,
    pontszam : 0
  };
  pontszam: number =0;

  megoldas: String;
  valasztott: Number;


  constructor(
    private  flashMessage : FlashMessagesService,
    private gameService : GameService,
    private regloginService : RegLoginService
   ) {
    this.kerdes = {
      kerdes: '',
      valasz1: '',
      valasz2: '',
      valasz3: '',
      valasz4: '',
      helyes: 0
    };
    this.felhasznalo = {
      felhasznalonev : '',
      pontszam : 0
    };
  }

  ngOnInit() {
    //lekerjuk a felhasznalo adatait tudjuk majd megjeleniteni mikozben jatszik
    this.regloginService.profilLekeres().subscribe(profil => {
    this.felhasznalo = profil.felhasznalo;
  }, err =>{
      console.log(err);
      return false;
  });
      this.gameService.kerdesLekeres().subscribe(kerdes => {
        //console.log(kerdes);
        this.kerdes = kerdes.eredmeny1;
      }, err =>{
        console.log(err);
        return false;
      });
  }


  helyesvalasz(){
    if(this.valasztott == this.kerdes.helyes){
      this.pontszam++;
      this.flashMessage.show("Congratulations your answer is correct!!!",{cssClass : 'alert-success', timeout : 5000 });
    }
    else{
       this.flashMessage.show("Unfortunately your answer is incorrect!!!\n Correct answer is: " + this.kerdes['valasz' + this.kerdes.helyes], {cssClass : 'alert-danger' ,timeout: 5000});
      }
  }


  kovetkezo(){
    this.gameService.kerdesLekeres().subscribe(kerdes => {
      this.kerdes = kerdes.eredmeny1;
      //console.log(this.kerdes);
    }, err =>{
      console.log(err);
      return false;
    });
  }

  ngOnDestroy(){
    this.felhasznalo.pontszam += this.pontszam;
    console.log(this.felhasznalo.pontszam);
    this.gameService.pontszamMentes(this.felhasznalo).subscribe(valami =>{
      console.log(valami);
    }, err =>{
      console.log(err);
      return false;
    });
  }


}
