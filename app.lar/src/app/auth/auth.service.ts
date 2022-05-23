import { EventEmitter, Injectable, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { GoogleAuthProvider } from '@angular/fire/auth';
import { User } from '../core/interface/user';
import { AppService } from '../app.service';
import { AuthGuard } from '../guards/auth.guard';

@Injectable({ providedIn: 'root' })
export class AuthService {

  constructor(private afAuth: AngularFireAuth, private router: Router, private appService : AppService, private authGuard : AuthGuard) {
  }
  

  login(email: string, password: string) {
    this.afAuth
      .signInWithEmailAndPassword(email, password)
      .then((value) => {
        this.setUsuario(value);
        this.router.navigate(['/attendances']);
      })
      .catch((err) => {
        this.appService.showMessage("Ocorreu um erro ao realizar o login. Mensagem: " + err.message, true);
        console.log('Erro: ', err.message);
      });
  }

  emailSignup(email: string, password: string) {
    this.afAuth
      .createUserWithEmailAndPassword(email, password)
      .then((value) => {
        console.log('Sucesso', value);
        this.setUsuario(value);
        this.router.navigate(['/attendances']);
      })
      .catch((error) => {
        this.appService.showMessage("Ocorreu um erro ao realizar o cadastro. Mensagem: " + error.message, true);
        console.log('Erro: ', error);
      });
  }

  async loginWithGoogle() {
    return this.AuthLogin(new GoogleAuthProvider());
  }

  logout() {
    this.afAuth.signOut().then(() => {
      this.setUsuario(null);
      this.authGuard.loadMenu(false);
      this.router.navigate(['/login']);
    });
  }

  AuthLogin(provider: GoogleAuthProvider) {
    return this.afAuth
      .signInWithPopup(provider)
      .then((result) => {
        console.log('Logado!');
        this.setUsuario(result);
        this.router.navigate(['/attendances']);
      })
      .catch((error) => {
        this.appService.showMessage("Ocorreu um erro ao realizar a autenticação. Mensagem: " + error.message, true);
        console.log(error);
      });
  }

  setUsuario(result: any) {
    if (result === null || result === undefined) {
      localStorage['token'] = undefined;
      localStorage['user'] = undefined;
      return;
    }

    localStorage['token'] = result.credential?.idToken;
    let user = new User(result.user?.email, result.credential?.idToken);
    localStorage['user'] = user;
  }
}
