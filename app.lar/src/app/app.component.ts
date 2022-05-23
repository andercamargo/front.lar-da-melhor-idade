import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { AuthService } from './auth/auth.service';
import { AuthGuard } from './guards/auth.guard';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'Lar da Melhor Idade';
  mostrarMenuLateral: boolean = false;
  mostrarHeader: boolean = false;
  
  constructor(private guard:AuthGuard){

  }

  ngOnInit(){
    this.guard.mostrarHeaderEmitter.subscribe(
      mostrarHeader => this.mostrarHeader = mostrarHeader
    );
    this.guard.mostrarMenuLateralEmitter.subscribe(
      mostrarMenuLateral => this.mostrarMenuLateral = mostrarMenuLateral  
    );
  }

  }
