import { MD_DIALOG_DATA, MdDialogRef } from '@angular/material';
import { Component, OnInit, Inject } from '@angular/core';

@Component({
  selector: 'app-gastos-edit',
  templateUrl: './gastos-edit.component.html',
  styleUrls: ['./gastos-edit.component.scss']
})
export class GastosEditComponent {

  private editData: any = {};

  constructor(
    @Inject(MD_DIALOG_DATA) data: any,
    private ref: MdDialogRef<GastosEditComponent>
  ) {
    this.editData = data;
  }

  edit(data: any) {
    this.ref.close(data);
  }

}
