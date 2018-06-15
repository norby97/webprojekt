import { Component, OnInit } from '@angular/core';
import { ValidateService } from '../../services/validate.service';
import { FlashMessagesService } from 'angular2-flash-messages';
import { RegLoginService } from '../../services/reglogin.service';
import { Router } from '@angular/router'

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  nev: String;
  felhasznalonev: String;
  email: String;
  jelszo : String;

//be kell inejktelni a validate service-t hogy tudjuk hasznalni ebben a componentben
  constructor(
  private  validateService:ValidateService,
  private  flashMessage : FlashMessagesService,
  private  regloginService : RegLoginService,
  private  router : Router
) { }

  ngOnInit() {
  }

regisztracio(){
    const felhasznalo = {
      nev: this.nev,
      felhasznalonev: this.felhasznalonev,
      email: this.email,
      jelszo: this.jelszo
    }

    //meghivjuk a validateservice-ben megirt ellenorzeseket
    if(!this.validateService.kiVanToltve(felhasznalo)){
      this.flashMessage.show("Please fill all the fields!!!", {cssClass: 'alert-danger', timeout: 3500 });
      return false;
    }

    if(!this.validateService.helyesEmail(felhasznalo.email)){
      this.flashMessage.show("Email doesn't match requirements!!!" , {cssClass : 'alert-danger', timeout: 3500});
      return false;
    }

    //ha minden rendben van akkor kezdodhet a regisztracio
    this.regloginService.regVegrehajt(felhasznalo).subscribe(data => {
    //visszakuld a szerver egy json tokent hogy succes==true vagy nem es az alapjan uzenunk a felhasznalonak
      if(data.succes){
        this.flashMessage.show("Succesfull registration now you can log in!!!" , {cssClass : 'alert-success', timeout: 3500});
        this.router.navigate(['/login']);
      }
      else{
        this.flashMessage.show("Unsuccesfull registration please try again!!!" , {cssClass : 'alert-danger', timeout: 3500});
        this.router.navigate(['/register']);
      }

  })
  }

}
