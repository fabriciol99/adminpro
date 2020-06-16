import { Component, OnInit, Input, Output, EventEmitter, ViewChild, ElementRef } from '@angular/core';


@Component({
  selector: 'app-incrementador',
  templateUrl: './incrementador.component.html',
  styleUrls: []
})
export class IncrementadorComponent implements OnInit {

  @ViewChild('txtProgress') txtProgress: ElementRef;

  @Input() leyenda: string = 'Leyenda';
  @Input()  progreso: number = 50;
  @Output() cambioValor: EventEmitter <number> = new EventEmitter();

  constructor() {
    console.log('leyenda', this.leyenda);
  }

  ngOnInit() {
  }
  onChange(newValue: number) {
   // let elemHTML : any = document.getElementsByName('progreso')[0];


    if (newValue > 100) {
      this.progreso = 100;
    } else if (newValue < 0) {
      this.progreso = 0;
    }
    // elemHTML.value = this.progreso;

    this.txtProgress.nativeElement.value = this.progreso ;
    this.cambioValor.emit( this.progreso);
    this.txtProgress.nativeElement.focus();
  }

  cambiarValor( valor: number){

    if (this.progreso + valor <= 100 && this.progreso  + valor > -1) {
      this.progreso += valor;
      this.cambioValor.emit( this.progreso);
    }


  }
}
