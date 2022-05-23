import { Component, Input, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { AuthService } from '../../auth/auth.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignUpComponent implements OnInit {
  @Input() email: string | undefined;
  @Input() password: string | undefined;

  constructor(public authService: AuthService) { }

  ngOnInit() {}

  onSubmit(formData: NgForm) {
    if (formData.valid) {
      console.log(formData.value);
      this.authService.emailSignup(
        formData.value.email,
        formData.value.password
      );
    }
  }
}