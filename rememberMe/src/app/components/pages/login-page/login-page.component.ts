import { Component } from '@angular/core';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.scss'],
})
export class LoginPageComponent {
  email: string = '';
  password: string = '';
  isLoading: boolean = false;
  onSubmit(): void {
    this.isLoading = true; // Simulate API call
    setTimeout(() => {
      console.log('Email:', this.email);
      console.log('Password:', this.password);
      this.isLoading = false;
    }, 2000);
  }
}
