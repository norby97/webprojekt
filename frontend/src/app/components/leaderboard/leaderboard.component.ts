import { Component, OnInit } from '@angular/core';
import { RegLoginService } from '../../services/reglogin.service';
import { Router } from '@angular/router'

@Component({
  selector: 'app-leaderboard',
  templateUrl: './leaderboard.component.html',
  styleUrls: ['./leaderboard.component.css']
})
export class LeaderboardComponent implements OnInit {

  ranglista: Object;

  constructor(
    private regloginService : RegLoginService,
    private router : Router
  ) { }

  //tehat mikor betoltjuk a leaderbord oldalt akkor le kell kerjuk a felhasznalo adatait amit majd megjelenitunk
    ngOnInit() {
      this.regloginService.ranglistaLekeres().subscribe(ranglista => {
        this.ranglista = ranglista.felhasznalonev;  
    }, err =>{
        console.log(err);
        return false;
    });
    }



}
