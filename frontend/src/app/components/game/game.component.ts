import { Component, OnInit } from '@angular/core';
import { GameService } from '../../services/game.service';
import { RegLoginService } from '../../services/reglogin.service';
import 'rxjs/add/operator/map';


@Component({
  selector: 'app-game',
  templateUrl: './game.component.html',
  styleUrls: ['./game.component.css']
})
export class GameComponent implements OnInit {

  kerdes: Object;
  felhasznalo:Object;
  pontszam: Number = 0;

  constructor(
    private gameService : GameService,
    private regloginService : RegLoginService
   ) { }

  ngOnInit() {
    //lekerjuk a felhasznalo adatait tudjuk majd megjeleniteni mikozben jatszik
    this.regloginService.profilLekeres().subscribe(profil => {
    this.felhasznalo = profil.felhasznalo;
  }, err =>{
      console.log(err);
      return false;
  });
      this.gameService.kerdesLekeres().subscribe(kerdes => {
        console.log(kerdes)
        this.kerdes = kerdes.eredmeny1;
      }, err =>{
        console.log(err);
        return false;
      });
  }
}
