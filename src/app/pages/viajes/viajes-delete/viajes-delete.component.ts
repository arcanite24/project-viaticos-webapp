import { Component, Inject } from '@angular/core';
import { MD_DIALOG_DATA, MdDialogRef, MdSnackBar } from '@angular/material';

@Component({
  selector: 'app-viajes-delete',
  templateUrl: './viajes-delete.component.html',
  styleUrls: ['./viajes-delete.component.scss']
})
export class ViajesDeleteComponent {
  
    constructor(
      @Inject(MD_DIALOG_DATA) public data: any,
      private ref: MdDialogRef<ViajesDeleteComponent>,
      private snack: MdSnackBar
    ) { }
  
    delete(id: string) {
      this.ref.close(this.data);
    }

}
