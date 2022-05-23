import { Component, Input, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { AuthService } from '../../auth/auth.service';

@Component({
  selector: 'app-email',
  templateUrl: './singin.component.html',
  styleUrls: ['./singin.component.css']
})
export class SingInComponent implements OnInit {
  @Input() email: string | undefined;
  @Input() password: string | undefined;

  constructor(
    private authService: AuthService) { }

  ngOnInit() {}

  onSubmit(formData : NgForm) {
    if (formData.valid) {
      console.log(formData.value);
      this.authService.login(
        formData.value.email,
        formData.value.password
      );
    }
  }
}