import { Router } from '@angular/router';
import { AngularFireAuth } from 'angularfire2/auth';
import { Component, ViewChild, HostListener } from '@angular/core';
import { MdSidenav, MdSnackBar } from "@angular/material";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {

  @ViewChild('sidenav') sidenav: MdSidenav;

  private isAdmin: any;

  constructor(
    private afAuth: AngularFireAuth,
    private snack: MdSnackBar,
    private router: Router
  ) { this.isAdmin = localStorage.getItem('5fdedfe381eef204ab3354d244885a40') }

  isRole(role: string) {
    return true;
  }

  @HostListener('window:resize', ['$event'])
  onResize(event) {
    if (event.target.innerWidth < 600) this.sidenav.close();
    if (event.target.innerWidth > 600) this.sidenav.open();
  }

  logout() {
    this.afAuth.auth.signOut().then(() => {
      this.router.navigate(['/login']);
    }).catch((err) => {
      return this.snack.open(err.message, '', {duration: 3000});
    });
  }

}
