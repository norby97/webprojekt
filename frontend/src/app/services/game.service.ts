import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';


@Injectable({
  providedIn: 'root'
})
export class GameService {

  constructor(
    private http: Http
  ) { }


//lekerunk egy kerdest
    kerdesLekeres(){
      let headers = new Headers();
      headers.append('Content-Type','application/json');
      return this.http.get('http://localhost:3000/games/game', {headers:headers}).map(res => res.json());
    }

//kerdes hozzaadas keres elkuldese
    kerdesHozzaadas(kerdes){
    let headers = new Headers();
    headers.append('Content-Type','application/json');
    return this.http.post('http://localhost:3000/games/addquestion', kerdes, {headers:headers}).map(res => res.json());
  }

//elkuldi a szervernek a pontszamot hogy mentse le
    pontszamMentes(felhasznalo){
    let headers = new Headers();
    headers.append('Content-Type', 'application/json');
    return this.http.post('http://localhost:3000/users/savegame', felhasznalo, {headers:headers}).map(res => res.json());
  }
}
