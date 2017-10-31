import {Component, OnInit} from '@angular/core';
import {User} from '../user';
import {EventEmitter, Output} from '@angular/core';
import {UserService} from '../user.service';

@Component({
  selector: 'ekoodi-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})
export class UserListComponent implements OnInit {

  title: string;
  users: User[];
  @Output() userSelected: EventEmitter<User>;
  newUser: User;

  constructor(private userService: UserService) {
    this.title = 'User List';
    this.users = [];
    this.userSelected = new EventEmitter();
    this.newUser = new User();
  }

  ngOnInit() {
    this.users = this.userService.getUsers();
  }

  onUserSelect(user: User) {
    this.userSelected.emit(user);
    console.log(user);
  }

  addUser() {
    console.log(this.newUser);
  }
}
