import { GastosEditComponent } from './../gastos-edit/gastos-edit.component';
import { GastosAdddComponent } from './../gastos-addd/gastos-addd.component';
import { MdDialog } from '@angular/material';
import { AngularFireDatabase } from 'angularfire2/database';
import { FirebaseListObservable } from 'angularfire2/database';
import { MdDialogRef, MD_DIALOG_DATA } from '@angular/material';
import { Component, OnInit, Inject } from '@angular/core';
import * as moment from "moment";

@Component({
  selector: 'app-viajes-gastos',
  templateUrl: './viajes-gastos.component.html',
  styleUrls: ['./viajes-gastos.component.scss']
})
export class ViajesGastosComponent {

  private id: string;
  private gastos: FirebaseListObservable<any>;

  constructor(
    @Inject(MD_DIALOG_DATA) public data: any,
    private ref: MdDialogRef<ViajesGastosComponent>,
    private db: AngularFireDatabase,
    private dialog: MdDialog
  ) {
    this.id = this.data;
    this.gastos = this.db.list('/gastos', {
      query: {
        orderByChild: 'viaje',
        equalTo: this.id
      }
    });
  }

  deleteGasto(id: string) {
    this.gastos.remove(id);
  }

  openAddGasto() {
    let modal = this.dialog.open(GastosAdddComponent, {width: '50%'});
    modal.afterClosed().subscribe((data) => {
      if(!data) return;
      data.viaje = this.id;
      this.gastos.push(data);
    });
  }

  openEditGasto(gasto: any) {
    let modal = this.dialog.open(GastosEditComponent, {width: '50%', data: gasto});
    modal.afterClosed().subscribe((data) => {
      if(!data) return;
      data.date = moment(data.date).format('YYYY-MM-DD');
      this.gastos.update(gasto.$key, data);
    });
  }

}
