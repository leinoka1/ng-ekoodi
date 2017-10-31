import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {User} from '../user';

@Component({
  selector: 'ekoodi-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})
export class UserListComponent implements OnInit {
  title: string;
  users: User[];
  @Output() userSelected: EventEmitter<User>;


  constructor() {
    this.title = 'User List';
    this.users = [];
    this.userSelected = new EventEmitter();
  }

  ngOnInit() {
    this.users = [
      new User('Sami', 'Anttonen'),
      new User('Joku', 'Muu'),
      new User('Ja viel ', 'Kolmas')
    ];
  }
onUserSelect(user: User) {
    this.userSelected.emit(user);
}

}
