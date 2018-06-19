import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';
import { tokenNotExpired } from 'angular2-jwt';
import 'rxjs/add/operator/map';


@Injectable({
  providedIn: 'root'
})
export class RegLoginService {
  regToken: any;
  felhasznalo: any;

  constructor(private http: Http) { }

//elkuldjuk a szervernek miutan jsonna alakitottuk
  regVegrehajt(felhasznalo){
    let headers = new Headers();
    headers.append('Content-Type', 'application/json');
    return this.http.post('http://localhost:3000/users/register', felhasznalo, {headers:headers}).map(res => res.json());
  }

//elkuldjuk a szervernek a login adatokat es visszakapjuk a tokent meg a user infot
  loginVegrehajt(felhasznalo){
    let headers = new Headers();
    headers.append('Content-Type', 'application/json');
    return this.http.post('http://localhost:3000/users/login', felhasznalo, {headers:headers}).map(res => res.json());

  }

//lementjuk a locastorage-ba az adatokat sikeres login eseten
  adatokMentese(token, felhasznalo){
    localStorage.setItem('id_token',token);
    localStorage.setItem('felhasznalo', JSON.stringify(felhasznalo));
    this.regToken = token;
    this.felhasznalo = felhasznalo;
}

//elkuldjuk a  felhasznalo tokenjet es visszakapjuk a szervertol az adatait
  profilLekeres(){
    let headers = new Headers();
    this.tokenBetolt();
    headers.append('Authorization', this.regToken);
    headers.append('Content-Type', 'application/json');
    return this.http.get('http://localhost:3000/users/profile', {headers:headers}).map(res => res.json());
}

//elkuldjuk a  felhasznalo tokenjet es visszakapjuk a szervertol az adatait
  ranglistaLekeres(){
    let headers = new Headers();
    headers.append('Content-Type', 'application/json');
    return this.http.get('http://localhost:3000/users/leaderboard', {headers:headers}).map(res => res.json());
}


//betoltjuk a tokent
  tokenBetolt(){
    const token = localStorage.getItem('id_token');
    this.regToken = token;
  }

//megmondja hogy be van loggolval token alapjan
  loggedIn(){
  return tokenNotExpired('id_token');
}

//megnezuk hogy admin van-e bejelentkezve
  adminLoggedIn(){
    const adminjog= JSON.parse(localStorage.getItem('felhasznalo'));
    if(adminjog == null)return false;
    return tokenNotExpired('id_token') && adminjog.admin;
  }

//kilepunk es toroljuk a locastorage-ot
  logoutVegrehajt(){
    this.regToken = null;
    this.felhasznalo = null;
    localStorage.clear();

  }

}
