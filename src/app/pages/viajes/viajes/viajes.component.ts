import { ViajesGastosComponent } from './../viajes-gastos/viajes-gastos.component';
import { Router } from '@angular/router';
import { AngularFireAuth } from 'angularfire2/auth';
import { ViajesDetailComponent } from './../viajes-detail/viajes-detail.component';
import { ViajesAddComponent } from './../viajes-add/viajes-add.component';
import { ViajesDeleteComponent } from './../viajes-delete/viajes-delete.component';
import { ViajesEditComponent } from './../viajes-edit/viajes-edit.component';
import { Component } from '@angular/core';
import { MdDialog } from "@angular/material";
import { AngularFireDatabase, FirebaseListObservable } from "angularfire2/database";

@Component({
  selector: 'app-viajes',
  templateUrl: './viajes.component.html',
  styleUrls: ['./viajes.component.scss']
})
export class ViajesComponent {

  private allViajes: FirebaseListObservable<any>;
  private allViajesArr: any[] = [];

  constructor(
    private dialog: MdDialog,
    private db: AngularFireDatabase,
    private afAuth: AngularFireAuth,
    private router: Router
  ) {
    this.afAuth.authState.subscribe((user) => {
      if (!user) return this.router.navigate(['/login']);
      this.allViajes = this.db.list('/viajes', {
        query: {
          orderByChild: 'user',
          equalTo: user.uid
        }
      });
      this.allViajes.subscribe(snap => this.allViajesArr = snap);
    });
  }

  openEdit(obj: any, i: number) {
    let modal = this.dialog.open(ViajesEditComponent, {data: obj, width: '80%'});
    modal.afterClosed().subscribe(
      (data) => {
        if (!data) return;
        if (data.err) return;
        this.allViajes.update(data.$key, data);
      }
    );
  }

  openDelete(id: string, i: number) {
    let modal = this.dialog.open(ViajesDeleteComponent, {data: id, width: '60%'});
    modal.afterClosed().subscribe(
      (data) => {
        if (!data) return;
        if (data.err) return;
        this.allViajes.remove(data);
      }
    );
  }

  openAdd() {
    let modal = this.dialog.open(ViajesAddComponent, {width: '50%', data: {isOwn: false}});
    modal.afterClosed().subscribe(
      (data) => {
        if (!data) return;
        if (data.err) return;
        this.allViajes.push(data);
      }
    );
  }

  openDetail(obj: any) {
    let modal = this.dialog.open(ViajesDetailComponent, {width: '40%', data: obj});
  }

  openGastos(id: string) {
    let modal = this.dialog.open(ViajesGastosComponent, {width: '50%', data: id});
  }

}
