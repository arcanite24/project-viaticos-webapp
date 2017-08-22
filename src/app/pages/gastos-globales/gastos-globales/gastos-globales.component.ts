import { GastosEditComponent } from './../../viajes/gastos-edit/gastos-edit.component';
import { GastosAdddComponent } from './../../viajes/gastos-addd/gastos-addd.component';
import { GastosGlobalesDetailComponent } from './../gastos-globales-detail/gastos-globales-detail.component';
import { GastosGlobalesAddComponent } from './../gastos-globales-add/gastos-globales-add.component';
import { GastosGlobalesDeleteComponent } from './../gastos-globales-delete/gastos-globales-delete.component';
import { GastosGlobalesEditComponent } from './../gastos-globales-edit/gastos-globales-edit.component';
import { MdDialog } from '@angular/material';
import { AngularFireDatabase } from 'angularfire2/database';
import { FirebaseListObservable } from 'angularfire2/database';
import { Component } from '@angular/core';

@Component({
  selector: 'app-gastos-globales',
  templateUrl: './gastos-globales.component.html',
  styleUrls: ['./gastos-globales.component.scss']
})
export class GastosGlobalesComponent {

  private gastos: FirebaseListObservable<any>;
  private allGastosArr: any[] = [];

  constructor(
    private db: AngularFireDatabase,
    private dialog: MdDialog
  ) {
    this.gastos = this.db.list('/gastos-globales', {
      query: {
        orderByChild: 'user',
        equalTo: localStorage.getItem('user')
      }
    });
    this.gastos.subscribe(snap => this.allGastosArr = snap);
  }

  openEdit(obj: any, i: number) {
    let modal = this.dialog.open(GastosEditComponent, {data: obj, width: '80%'});
    modal.afterClosed().subscribe(
      (data) => {
        if (!data) return;
        if (data.err) return;
        this.gastos.update(data.$key, data);
      }
    );
  }

  openDelete(id: string, i: number) {
    let modal = this.dialog.open(GastosGlobalesDeleteComponent, {data: id, width: '60%'});
    modal.afterClosed().subscribe(
      (data) => {
        if (!data) return;
        if (data.err) return;
        this.gastos.remove(data);
      }
    );
  }

  openAdd() {
    let modal = this.dialog.open(GastosAdddComponent, {width: '50%'});
    modal.afterClosed().subscribe(
      (data) => {
        if (!data) return;
        if (data.err) return;
        data.user = localStorage.getItem('user');
        this.gastos.push(data);
      }
    );
  }

  openDetail(obj: any) {
    let modal = this.dialog.open(GastosGlobalesDetailComponent, {width: '40%', data: obj});
  }

}
