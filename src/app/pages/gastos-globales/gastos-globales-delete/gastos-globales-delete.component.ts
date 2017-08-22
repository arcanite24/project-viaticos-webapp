import { Component, Inject } from '@angular/core';
import { MD_DIALOG_DATA, MdDialogRef, MdSnackBar } from '@angular/material';

@Component({
  selector: 'app-gastos-globales-delete',
  templateUrl: './gastos-globales-delete.component.html',
  styleUrls: ['./gastos-globales-delete.component.scss']
})
export class GastosGlobalesDeleteComponent {

  constructor(
    @Inject(MD_DIALOG_DATA) public data: any,
    private ref: MdDialogRef<GastosGlobalesDeleteComponent>,
    private snack: MdSnackBar
  ) { }

  delete(id: string) {
    this.ref.close(this.data);
  }
}
