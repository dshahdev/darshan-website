import { Injectable } from '@angular/core';
import { MessageService } from '../messages/message.service';
import { User } from './user';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  currentUser: User;

  get isLoggedIn(): boolean {
   
    return !!this.currentUser;
  }
  constructor(private messageService: MessageService) { }

  login(username: string, password: string) {
    if(!username || !password) {
      this.messageService.addMessage('Please enter your username and password');
      return;
    }
    if(username === 'admin') {
      this.currentUser =  {
        id: 1,
        userName: username,
        isAdmin: true
      };
      this.messageService.addMessage('Admin login');
      return;
    }
    this.currentUser = {
      id: 2,
      userName: username,
      isAdmin: false
    };
    this.messageService.addMessage(`User: ${this.currentUser.userName} logged in`);
  }

  logout(): void {
    this.currentUser= null;
  }
}
