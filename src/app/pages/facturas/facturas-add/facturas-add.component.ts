import { MdDialogRef } from '@angular/material';
import { FirebaseListObservable, AngularFireDatabase } from 'angularfire2/database';
import { Component } from '@angular/core';

@Component({
  selector: 'app-facturas-add',
  templateUrl: './facturas-add.component.html',
  styleUrls: ['./facturas-add.component.scss']
})
export class FacturasAddComponent {

  private userId: string = localStorage.getItem('user');
  private gastos: FirebaseListObservable<any>;
  private globales: FirebaseListObservable<any>;
  private facturas: FirebaseListObservable<any>;

  private gastosArr: any[] = [];
  private globalesArr: any[] = [];
  private facturasArr: any[] = [];

  private facturasId: string[] = [];
  private loader: boolean = true;

  constructor(
    private ref: MdDialogRef<FacturasAddComponent>,
    private db: AngularFireDatabase,
  ) {
    this.gastos = db.list('gastos', {query: {orderByChild: 'user', equalTo: this.userId}});
    this.globales = db.list('gastos-globales', {query: {orderByChild: 'user', equalTo: this.userId}});
    this.facturas = db.list('facturas', {query: {orderByChild: 'user', equalTo: this.userId}});

    this.gastos.subscribe(snap => this.gastosArr = snap);
    this.globales.subscribe(snap => this.globalesArr = snap);
    this.facturas.subscribe(snap => this.facturasId = snap.map(f => f.gasto));

    setTimeout(() => {
      this.gastosArr = this.gastosArr.filter(g => this.facturasId.indexOf(g.$key) < 0);
      this.globalesArr = this.globalesArr.filter(g => this.facturasId.indexOf(g.$key) < 0);
      this.loader = false;
    }, 1000);

  }

}
