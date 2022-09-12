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
    mascota: '',
    age: '',
    raza: '',
    celular: '',
    direccion: '',
    observaciones: '',
    servicio: '',
    size: 0,
    email: '',
    horaIngreso: '',
    horaSalida: '',
    bikini: '',
    nails: '',
    ojos: '',
    oidos: '',
    corte: '',
  };
  editUser: Users = {
    id: -1,
    username: '',
    mascota: '',
    age: '',
    raza: '',
    celular: '',
    direccion: '',
    observaciones: '',
    servicio: '',
    size: 0,
    email: '',
    horaIngreso: '',
    horaSalida: '',
    bikini: '',
    nails: '',
    ojos: '',
    oidos: '',
    corte: '',
  };
  users: Users[] = [
    {
      id: 0,
      username: '1062674653',
      mascota: 'Roberta',
      age: '4 años',
      raza: 'Birmano',
      celular: '3124567869',
      direccion: '',
      observaciones: '',
      servicio: '',
      size: 0,
      email: 'user0@domain.com',
      horaIngreso: '3 PM',
      horaSalida: '5 PM',
      bikini: '',
      nails: '',
      ojos: '',
      oidos: '',
      corte: '',
    },
    {
      id: 1,
      username: '103957782',
      mascota: 'Príncipe',
      age: '7 meses',
      raza: 'Angora',
      celular: '3124567869',
      direccion: '',
      observaciones: '',
      servicio: '',
      size: 0,
      email: 'user1@domain.com',
      horaIngreso: '2 PM',
      horaSalida: '4 PM',
      bikini: '',
      nails: '',
      ojos: '',
      oidos: '',
      corte: '',
    },
    {
      id: 2,
      username: '3459173928',
      mascota: 'Canela',
      age: '5 años',
      raza: 'Golden',
      celular: '3124523449',
      direccion: '',
      observaciones: '',
      servicio: '',
      size: 0,
      email: 'user2@domain.com',
      horaIngreso: '9 AM',
      horaSalida: '12 PM',
      bikini: '',
      nails: '',
      ojos: '',
      oidos: '',
      corte: '',
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
      mascota: '',
      age: '',
      raza: '',
      celular: '',
      direccion: '',
      observaciones: '',
      servicio: '',
      size: 0,
      email: '',
      horaIngreso: '',
      horaSalida: '',
      bikini: '',
      nails: '',
      ojos: '',
      oidos: '',
      corte: '',
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
