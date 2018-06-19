import { Injectable } from '@angular/core';
import { Router , CanActivate } from '@angular/router';
import { RegLoginService } from '../services/reglogin.service';

@Injectable()
export class AdminGuard implements CanActivate{

  constructor(
    private regloginService: RegLoginService,
    private router: Router
    ){}

//lechekolja hogy admin van-e belepve
  canActivate(){
    if(this.regloginService.loggedIn() && this.regloginService.adminLoggedIn()){
      return true;
    }
    else{
      this.router.navigate(['/login']);
      return false;
    }
  }

}
