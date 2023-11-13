import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TemaService {
  private temaEscuro: boolean = false;

  alternarTema(): void {
    this.temaEscuro = !this.temaEscuro;
    if (this.temaEscuro) {
      document.body.classList.add('tema-escuro');
    } else {
      document.body.classList.remove('tema-escuro');
    }
  }

  isTemaEscuro(): boolean {
    return this.temaEscuro;
  }
}
