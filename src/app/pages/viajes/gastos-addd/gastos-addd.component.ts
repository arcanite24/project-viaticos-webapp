import { MD_DIALOG_DATA, MdDialogRef } from '@angular/material';
import { Component, OnInit, Inject } from '@angular/core';
import * as moment from 'moment';

@Component({
  selector: 'app-gastos-addd',
  templateUrl: './gastos-addd.component.html',
  styleUrls: ['./gastos-addd.component.scss']
})
export class GastosAdddComponent {

  private addData: any = {};

  constructor(
    private ref: MdDialogRef<GastosAdddComponent>
  ) { }

  add(data: any) {
    data.date = moment(this.addData.date).format('YYYY-MM-DD');
    this.ref.close(data);
  }

}
