import { Component } from '@angular/core';
import { TemaService } from './tema.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  constructor(public temaService: TemaService) {}

  alternarTema() {
    this.temaService.alternarTema();
  }
}
