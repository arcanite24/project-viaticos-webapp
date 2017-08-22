import { MD_DIALOG_DATA, MdDialogRef } from '@angular/material';
import { Component, Inject } from '@angular/core';

@Component({
  selector: 'app-viajes-detail',
  templateUrl: './viajes-detail.component.html',
  styleUrls: ['./viajes-detail.component.scss']
})
export class ViajesDetailComponent {

  private viaje: any;

  constructor(
    @Inject(MD_DIALOG_DATA) data: any,
    private ref: MdDialogRef<ViajesDetailComponent>
  ) { this.viaje = data }

}
