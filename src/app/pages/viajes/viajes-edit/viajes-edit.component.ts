import { MD_DIALOG_DATA, MdDialogRef } from '@angular/material';
import { Component, Inject } from '@angular/core';

@Component({
  selector: 'app-viajes-edit',
  templateUrl: './viajes-edit.component.html',
  styleUrls: ['./viajes-edit.component.scss']
})
export class ViajesEditComponent {

  private editData: any = {};

  constructor(
    @Inject(MD_DIALOG_DATA) public data: any,
    private ref: MdDialogRef<ViajesEditComponent>,
  ) {
    this.editData = this.data;
  }

  edit(data: any) {
    this.ref.close(data);
  }

}
