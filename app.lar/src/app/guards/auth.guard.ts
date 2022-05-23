import { EventEmitter, Injectable, OnInit } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router, UrlTree } from "@angular/router";

import { Observable } from "rxjs";


@Injectable()
export class AuthGuard implements CanActivate, OnInit {
    mostrarMenuLateralEmitter = new EventEmitter<boolean>();
    mostrarHeaderEmitter = new EventEmitter<boolean>();
    
    constructor(private router: Router) { }

    ngOnInit(): void {
        this.loadMenu(false);
    }
    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean | Observable<boolean> {

        if (localStorage['token'] == undefined) {
            this.router.navigate(['/login']);
            this.loadMenu(false);
            return false;
        }

        if (localStorage['token'] != 'null') {
            this.loadMenu(true);
            return true;
        } else {
            this.router.navigate(['/login']);
            this.loadMenu(false);
            return false;
        }
    }

    loadMenu(valor: boolean) {
        this.mostrarMenuLateralEmitter.emit(valor);
        this.mostrarHeaderEmitter.emit(valor);
      }
}
