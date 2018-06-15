import { Component, OnInit } from '@angular/core';
import { FlashMessagesService } from 'angular2-flash-messages';
import { RegLoginService } from '../../services/reglogin.service';
import { Router } from '@angular/router'

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  constructor(
    private  flashMessage : FlashMessagesService,
    private  regloginService : RegLoginService,
    private  router : Router
  ) { }

  ngOnInit() {
  }

//elkuldjuk a reglogin service-nek a kerest hogy loggoljon ki majd atiranyitunk a login oldalra
  logout(){
      this.regloginService.logoutVegrehajt();
      this.flashMessage.show("You are now logged out!!!", {cssClass: "alert-success", timeout: 3500});
      this.router.navigate(['/login']);
      return false;
  }

}
