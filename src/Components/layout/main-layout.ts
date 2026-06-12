import { Component, inject } from '@angular/core';
import { RouterOutlet, RouterLink } from '@angular/router';
import { NgIf } from '@angular/common';
import { AuthService } from '../../app/auth.service';

@Component({
  selector: 'app-main-layout',
  standalone: true,
  imports: [RouterOutlet, RouterLink, NgIf],
  template: `
    <div [class.dark]="dark">
      <nav class="nav">
        <a routerLink="/home">Home</a>
        <a routerLink="/admin">Admin</a>
        <span *ngIf="!auth.isAuthenticated()"> <a routerLink="/login">Login</a> | <a routerLink="/signup">Sign up</a> </span>
        <span *ngIf="auth.isAuthenticated()"> Welcome {{auth.currentUser()?.name}} | <a href="#" (click)="logout()">Logout</a> </span>
        <button (click)="toggle()" class="theme">Toggle Theme</button>
      </nav>
      <main>
        <router-outlet></router-outlet>
      </main>
    </div>
  `,
  styles: [`.nav{display:flex;gap:12px;padding:12px;border-bottom:1px solid #eee;align-items:center}
  .theme{margin-left:auto}`]
})
export class MainLayout {
  auth = inject(AuthService);
  dark = false;

  logout(){ this.auth.logout(); }
  toggle(){ this.dark = !this.dark; }
}
