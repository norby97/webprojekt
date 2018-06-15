import { Component, OnInit } from '@angular/core';
import { FlashMessagesService } from 'angular2-flash-messages';
import { RegLoginService } from '../../services/reglogin.service';
import { Router } from '@angular/router'

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  felhasznalonev: String;
  jelszo : String;

  constructor(
    private  flashMessage : FlashMessagesService,
    private  regloginService : RegLoginService,
    private  router : Router
    ) { }

  ngOnInit() {
  }

  login(){
    const felhasznalo={
      felhasznalonev : this.felhasznalonev,
      jelszo : this.jelszo
    }

    this.regloginService.loginVegrehajt(felhasznalo).subscribe(data =>{
      if(data.succes){
        //lementjuk a tokent es a felhasznaloadatokat ha sikeres a login es atiranyitjuk a home-ra
        this.regloginService.adatokMentese(data.token, data.felhasznalo);
        this.flashMessage.show("Succesfull login!!!", {cssClass : 'alert-success', timeout: 3500});
        this.router.navigate(['/home']);
      }
      else{
        //ha nem sikeres a login a akkor message es vissza loginra
        this.flashMessage.show(data.msg , {cssClass : 'alert-danger', timeout: 3500});
        this.router.navigate(['/login']);
      }
    });
  }



}
