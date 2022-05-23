import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../auth/auth.service';

import { DomSanitizer } from '@angular/platform-browser';
import { MatIconRegistry } from '@angular/material/icon';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  constructor(
    private authService: AuthService,
    private matIconRegistry: MatIconRegistry,
    private domSanitizer: DomSanitizer
  ) {
    this.matIconRegistry.addSvgIcon(
      'logo',this.domSanitizer.bypassSecurityTrustResourceUrl('../../assets/Google.svg')
    );
  }
  
  ngOnInit(): void {}

  loginGoogle() {
    this.authService.loginWithGoogle();
  }
}
