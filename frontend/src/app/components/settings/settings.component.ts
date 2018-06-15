import { Component, OnInit } from '@angular/core';
import { FlashMessagesService } from 'angular2-flash-messages';
import { GameService } from '../../services/game.service';
import { Router } from '@angular/router'

@Component({
  selector: 'app-settings',
  templateUrl: './settings.component.html',
  styleUrls: ['./settings.component.css']
})
export class SettingsComponent implements OnInit {
    kerdes: String;
    valasz1 : String;
    valasz2 : String;
    valasz3 : String;
    valasz4 : String;
    helyes : Number;

  constructor(
    private  flashMessage : FlashMessagesService,
    private  gameService : GameService,
    private  router : Router
  ) { }

  ngOnInit() {

  }

  hozzaadas(){
    const kerdes={
      kerdes  : this.kerdes,
      valasz1 : this.valasz1,
      valasz2 : this.valasz2,
      valasz3 : this.valasz3,
      valasz4 : this.valasz4,
      helyes  : this.helyes
    }
    
    this.gameService.kerdesHozzaadas(kerdes).subscribe(data =>{
      if(data.succes){
        //ha sikeres volt a kerdeshozzadas jelezzuk a felhasznalonak es visszaterunk a fooldalra
        this.flashMessage.show(data.msg, {cssClass : 'alert-success', timeout: 3500});
        this.router.navigate(['/home']);
      }
      else{
        //ha nem sikeres a hozzadas  akkor visszajelzes es ujra erre az oldalra
        this.flashMessage.show(data.msg , {cssClass : 'alert-danger', timeout: 3500});
        this.router.navigate(['/settings']);
      }
    });
  }

}
