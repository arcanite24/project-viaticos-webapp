import { UploadService } from './../../../upload.service';
import { MD_DIALOG_DATA, MdDialogRef, MdSnackBar } from '@angular/material';
import { Component, Inject } from '@angular/core';

@Component({
  selector: 'app-facturas-edit',
  templateUrl: './facturas-edit.component.html',
  styleUrls: ['./facturas-edit.component.scss']
})
export class FacturasEditComponent {

  private factura: any;
  private loader: boolean = false;

  constructor(
    @Inject(MD_DIALOG_DATA) data: any,
    private ref: MdDialogRef<FacturasEditComponent>,
    private upload: UploadService,
    private snack: MdSnackBar
  ) { this.factura = data }

  close(xml: File, pdf: File) {
    if(!xml && !pdf) return this.ref.close(this.factura);
    this.loader = true;
    if(xml && !pdf) {
      this.upload.upload(xml, url => {
        this.factura.xml = url;
        return this.ref.close(this.factura);
      });
    } else if (!xml && pdf) {
      this.upload.upload(pdf, url => {
        this.factura.pdf = url;
        return this.ref.close(this.factura);
      });
    } else if (xml && pdf) {
      this.upload.upload(xml, url => {
        this.factura.xml = url;
        this.upload.upload(pdf, url_pdf => {
          this.factura.pdf = url_pdf;
          return this.ref.close(this.factura);
        })
      });
    } else {
      return this.snack.open('Error, no se pudo editar la factura.', '', {duration: 3000});
    }
  }

}
