import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import SignaturePad from 'signature_pad';

@Component({
  selector: 'app-form',
  imports: [],
  templateUrl: './form.component.html',
  styleUrl: './form.component.css'
})
export class FormComponent {
  signaturePad!: SignaturePad;
  canvasData: string = ''

  ngOnInit() {
    const canvas = document.getElementById('signatureCanvas') as HTMLCanvasElement;
    this.signaturePad = new SignaturePad(canvas);
  }

  saveSignature() {
    this.canvasData = this.signaturePad.toDataURL();
    console.log(this.canvasData);
  }

  clearCanvas() {
    this.signaturePad.clear();
    this.canvasData = '';
  }


}
