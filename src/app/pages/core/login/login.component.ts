import { FirebaseListObservable } from 'angularfire2/database';
import { FirebaseObjectObservable } from 'angularfire2/database';
import { AngularFireDatabase } from 'angularfire2/database';
import { AngularFireAuth } from 'angularfire2/auth';
import { Component } from '@angular/core';
import { MdSnackBar } from "@angular/material";
import { Router } from "@angular/router";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {

  private loginData: any = {};
  private loader: boolean = false;

  private users: FirebaseListObservable<any>;
  private usersArray: any[] = [];

  constructor(
    private snack: MdSnackBar,
    private afAuth: AngularFireAuth,
    private router: Router,
    private db: AngularFireDatabase
  ) {
    this.users = db.list('/usuarios');
    this.users.subscribe(snap => this.usersArray = snap);
  }

  login(username: string, password: string) {
    if(!username) return this.snack.open('Ingresa tu email para iniciar sesión', '', {duration: 3000});
    if(!password) return this.snack.open('Contraseña no ingresada', '', {duration: 3000});
    this.loader = true;
    this.afAuth.auth.signInWithEmailAndPassword(username, password).then((user) => {
      this.loader = false;
      localStorage.setItem('user', user.uid);

      // Check for admin
      let tempUsers = this.usersArray.filter(u => u.uid == user.uid);
      if(tempUsers.length > 0) {
        localStorage.setItem('5fdedfe381eef204ab3354d244885a40', tempUsers[0].isAdmin);
      }

      this.snack.open(`Bienvenido ${user.displayName ? user.displayName : user.email}`, '', {duration: 3000});
      this.router.navigate(['/home', {outlets: {inner: 'dashboard'}}]);
    }).catch((err) => {
      this.loader = false;
      this.snack.open(err.message, '', {duration: 3000});
    });
  }

}
