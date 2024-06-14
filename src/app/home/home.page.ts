import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  operacao: string = '';
  operando1: number | null = null;
  operando2: number | null = null;
  resultado: number | null = null;

  constructor() {}

  limpar() {
    this.operacao = '';
    this.operando1 = null;
    this.operando2 = null;
    this.resultado = null;
  }

  ativarSoma() {
    this.operacao = '+';
  }

  ativarSubtracao() {
    this.operacao = '-';
  }

  ativarMultiplicacao() {
    this.operacao = '*';
  }

  ativarDivisao() {
    this.operacao = '/';
  }

  calcularResultado() {
    if (this.operando1 === null || this.operando2 === null) {
      console.error('Preencha os operandos.');
      return;
    }

    switch (this.operacao) {
      case '+':
        this.resultado = this.operando1 + this.operando2;
        break;
      case '-':
        this.resultado = this.operando1 - this.operando2;
        break;
      case '*':
        this.resultado = this.operando1 * this.operando2;
        break;
      case '/':
        if (this.operando2 !== 0) {
          this.resultado = this.operando1 / this.operando2;
        } else {
          console.error('Divisão por zero não é permitida.');
        }
        break;
      default:
        console.error('Operação inválida.');
    }
  }
}
