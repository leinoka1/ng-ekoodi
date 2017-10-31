import { Injectable } from '@angular/core';
import {User} from './user';


@Injectable()
export class UserService {
  private users: User[];

    constructor() {

    this.users = [
      new User('Sami', 'Anttonen'),
      new User('Joku', 'Muu'),
      new User('Ja viel ', 'Kolmas')
    ];
  }

  getUsers(): User[] {
    return this.users;
  }

  addUser(user: User) {
this.users.push(Object.assign( {}, user));
  }
}
