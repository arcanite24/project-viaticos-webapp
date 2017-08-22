import { MD_DIALOG_DATA, MdDialogRef } from '@angular/material';
import { Component, Inject } from '@angular/core';

@Component({
  selector: 'app-facturas-detail',
  templateUrl: './facturas-detail.component.html',
  styleUrls: ['./facturas-detail.component.scss']
})
export class FacturasDetailComponent {

  private factura: any;

  constructor(
    @Inject(MD_DIALOG_DATA) data: any,
    private ref: MdDialogRef<FacturasDetailComponent>
  ) { this.factura = data }

}
