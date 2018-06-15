import { Component, OnInit } from '@angular/core';
import { RegLoginService } from '../../services/reglogin.service';
import { Router } from '@angular/router'

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
  felhasznalo:Object;

  constructor(
    private regloginService : RegLoginService,
    private router : Router
  ) { }

//tehat mikor betoltjuk a profil oldalt akkor le kell kerjuk hogy van bejelentkezve felhasznalo
  ngOnInit() {
    this.regloginService.profilLekeres().subscribe(profil => {
    this.felhasznalo = profil.felhasznalo;
  }, err =>{
      console.log(err);
      return false;
  });
  }

}
