import { FacturasDetailComponent } from './../facturas-detail/facturas-detail.component';
import { FacturasAddComponent } from './../facturas-add/facturas-add.component';
import { FacturasDeleteComponent } from './../facturas-delete/facturas-delete.component';
import { FacturasEditComponent } from './../facturas-edit/facturas-edit.component';
import { MdDialog } from '@angular/material';
import { AngularFireDatabase } from 'angularfire2/database';
import { FirebaseListObservable } from 'angularfire2/database';
import { Component } from '@angular/core';
import * as moment from 'moment';

@Component({
  selector: 'app-facturas',
  templateUrl: './facturas.component.html',
  styleUrls: ['./facturas.component.scss']
})
export class FacturasComponent {

  private facturas: FirebaseListObservable<any>;
  private allFacturas: any[] = [];

  constructor(
    private db: AngularFireDatabase,
    private dialog: MdDialog
  ) {
    this.facturas = this.db.list('/facturas', {
      query: {
        orderByChild: 'user',
        equalTo: localStorage.getItem('user')
      }
    });
    this.facturas.subscribe(snap => this.allFacturas = snap);
  }

  openAdd() {
    let modal = this.dialog.open(FacturasAddComponent, {width: '50%'});
    modal.afterClosed().subscribe(
      (data) => {
        if (!data) return;
        if (data.err) return;
        data.user = localStorage.getItem('user');
        data.gasto = data.$key;
        data.status = 2;
        data.pedida = moment().format('YYYY/MM/DD');
        this.facturas.push(data);
      }
    );
  }

  openDetail(obj: any) {
    let modal = this.dialog.open(FacturasDetailComponent, {width: '40%', data: obj});
  }

}
