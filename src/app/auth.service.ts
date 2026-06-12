import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

export interface User {
  id: number;
  name: string;
  email: string;
  password: string;
}

@Injectable({ providedIn: 'root' })
export class AuthService {
  private storageKey = 'demo_users';
  private currentKey = 'demo_current_user';

  constructor() {}

  private readUsers(): User[] {
    const raw = localStorage.getItem(this.storageKey);
    return raw ? JSON.parse(raw) as User[] : [];
  }

  private writeUsers(users: User[]) {
    localStorage.setItem(this.storageKey, JSON.stringify(users));
  }

  signup(user: Omit<User, 'id'>): Observable<User> {
    const users = this.readUsers();
    const exists = users.find(u => u.email === user.email);
    if (exists) throw new Error('User already exists');
    const newUser: User = { id: Date.now(), ...user } as User;
    users.push(newUser);
    this.writeUsers(users);
    localStorage.setItem(this.currentKey, JSON.stringify(newUser));
    return of(newUser);
  }

  login(email: string, password: string): Observable<User | null> {
    const users = this.readUsers();
    const found = users.find(u => u.email === email && u.password === password) || null;
    if (found) localStorage.setItem(this.currentKey, JSON.stringify(found));
    return of(found);
  }

  logout() {
    localStorage.removeItem(this.currentKey);
  }

  currentUser(): User | null {
    const raw = localStorage.getItem(this.currentKey);
    return raw ? JSON.parse(raw) as User : null;
  }

  isAuthenticated(): boolean {
    return this.currentUser() !== null;
  }
}
