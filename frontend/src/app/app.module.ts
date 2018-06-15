import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { AppComponent } from './app.component';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { RouterModule, Routes } from '@angular/router';
import { NavbarComponent } from './components/navbar/navbar.component';
import { HomeComponent } from './components/home/home.component';
import { GameComponent } from './components/game/game.component';
import { LeaderboardComponent } from './components/leaderboard/leaderboard.component';
import { ProfileComponent } from './components/profile/profile.component';
import { ValidateService } from './services/validate.service';
import { FlashMessagesModule } from 'angular2-flash-messages';
import { RegLoginService } from './services/reglogin.service';
import { RegLoginGuard } from './guards/reglogin.guard';
import { GameService } from './services/game.service';

//meagadjuk az utakat bizonyos oldalakhoz
const appRoutes = [
{path: 'login', component : LoginComponent},
{path: 'register', component:RegisterComponent},
{path: 'home', component:HomeComponent},
{path: 'profile', component:ProfileComponent, canActivate :[RegLoginGuard]},
{path: 'leaderboard', component:LeaderboardComponent, canActivate :[RegLoginGuard]},
{path: 'game', component:GameComponent, canActivate :[RegLoginGuard]}

]

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
    NavbarComponent,
    HomeComponent,
    GameComponent,
    LeaderboardComponent,
    ProfileComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot(appRoutes),
    FlashMessagesModule.forRoot()
  ],
  providers: [ValidateService,RegLoginService, RegLoginGuard, GameService],
  bootstrap: [AppComponent]
})
export class AppModule { }
