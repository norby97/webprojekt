import { Component, OnInit } from '@angular/core';
import { RegLoginService } from '../../services/reglogin.service';
import { Router } from '@angular/router'

@Component({
  selector: 'app-leaderboard',
  templateUrl: './leaderboard.component.html',
  styleUrls: ['./leaderboard.component.css']
})
export class LeaderboardComponent implements OnInit {

  ranglista: {nev:string, felhasznalonev:string , pontszam: Number}[];

  constructor(
    private regloginService : RegLoginService,
    private router : Router
  ) { }

  //tehat mikor betoltjuk a leaderbord oldalt akkor le kell kerjuk a felhasznalo adatait amit majd megjelenitunk
    ngOnInit() {
      this.regloginService.ranglistaLekeres().subscribe(ranglista => {
        this.ranglista = ranglista;
        this.ranglista.sort((a, b) => a.pontszam > b.pontszam ? -1 : a.pontszam < b.pontszam ? 1 : 0);
        //console.log(this.ranglista)
    }, err =>{
        console.log(err);
        return false;
    });
    }



}
