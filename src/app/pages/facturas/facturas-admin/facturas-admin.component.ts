import { FacturasEditComponent } from './../facturas-edit/facturas-edit.component';
import { FacturasDetailComponent } from './../facturas-detail/facturas-detail.component';
import { MdDialog } from '@angular/material';
import { FirebaseListObservable, AngularFireDatabase } from 'angularfire2/database';
import { Component } from '@angular/core';

@Component({
  selector: 'app-facturas-admin',
  templateUrl: './facturas-admin.component.html',
  styleUrls: ['./facturas-admin.component.scss']
})
export class FacturasAdminComponent {

  private facturas: FirebaseListObservable<any>;
  private allFacturas: any[] = [];

  constructor(
    private db: AngularFireDatabase,
    private dialog: MdDialog
  ) {
    this.facturas = db.list('facturas');
    this.facturas.subscribe(snap => this.allFacturas = snap);
  }

  openDetail(obj: any) {
    let modal = this.dialog.open(FacturasDetailComponent, {width: '40%', data: obj});
  }

  openEdit(obj: any) {
    let modal = this.dialog.open(FacturasEditComponent, {width: '50%', data: obj});
    modal.afterClosed().subscribe((data) => {
      if (!data) return;
      if (data.err) return;
      console.log('====================================');
      console.log(data);
      console.log('====================================');
      this.facturas.update(data.$key, data);
    });
  }

}
