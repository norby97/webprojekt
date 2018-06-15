import { Injectable } from '@angular/core';
import { Router , CanActivate } from '@angular/router';
import { RegLoginService } from '../services/reglogin.service';

@Injectable()
export class RegLoginGuard implements CanActivate{

  constructor(
    private regloginService: RegLoginService,
    private router: Router
    ){}

//lechekolja hogy van bejelentkezve felhasznalo ha nincs redirektel loginra
    canActivate(){
      if(this.regloginService.loggedIn()){
        return true;
      }
      else{
        this.router.navigate(['/login']);
        return false;
      }

    }

//lechekolja hogy admin van-e belepve
    canActivateSettings(){
      if(this.regloginService.loggedIn() && this.regloginService.adminLoggedIn()){
        console.log("valami");
        return true;
      }
      else{
        this.router.navigate(['/login']);
        return false;
      }
    }
}
