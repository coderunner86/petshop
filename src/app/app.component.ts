import { Component, VERSION } from '@angular/core';
import { Users } from './Users';
@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  myDate: Date = new Date();
  inputUser: Users = {
    id: -1,
    username: '',
    password: '',
    email: '',
  };
  editUser: Users = {
    id: -1,
    username: '',
    password: '',
    email: '',
  };
  users: Users[] = [
    {
      id: 0,
      username: '1062674653',
      password: '123',
      email: 'user0@domain.com',
    },
    {
      id: 1,
      username: '103957782',
      password: '123',
      email: 'user1@domain.com',
    },
    {
      id: 2,
      username: '3459173928',
      password: '123',
      email: 'user2@domain.com',
    },
  ];

  copyUsers: Users[] = this.users;

  public addUser() {
    if (this.users.length == 0) {
      this.inputUser.id = 0;
    } else {
      this.inputUser.id = this.users[this.users.length - 1].id + 1;
    }
    this.users.push(this.inputUser);

    this.resetForm();
  }

  public eliminar(position: number) {
    //splice(indiceDondeCambiaelarray,numeroelementosaeliminar)
    this.users.splice(position, 1);
  }

  private resetForm() {
    this.inputUser = {
      id: -1,
      username: '',
      password: '',
      email: '',
    };
  }

  public filterUsers(event: Event) {
    const text = event.target as HTMLInputElement;
    let filter = text.value;
    this.users = this.users.filter((us) => us.username.includes(filter));
    if (text.value == '') {
      this.users = this.copyUsers;
    }
  }

  public loadInfo(position: number) {
    this.editUser = this.users[position];
  }
}
