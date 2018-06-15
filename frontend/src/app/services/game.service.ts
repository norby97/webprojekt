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
      return this.http.get('http://localhost:3000/users/game', {headers:headers}).map(res => res.json());
    }
}
