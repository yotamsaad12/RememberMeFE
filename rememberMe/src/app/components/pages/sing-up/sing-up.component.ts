import { Component } from '@angular/core';

@Component({
  selector: 'app-sing-up',
  templateUrl: './sing-up.component.html',
  styleUrls: ['./sing-up.component.scss'],
})
export class SingUpComponent {
  name: string = '';
  email: string = '';
  password: string = '';
  confirmPassword: string = '';
  isLoading: boolean = false;
  onSubmit(): void {
    if (this.password !== this.confirmPassword) {
      alert('Passwords do not match!');
      return;
    }
    this.isLoading = true;
    setTimeout(() => {
      console.log('Name:', this.name);
      console.log('Email:', this.email);
      console.log('Password:', this.password);
      this.isLoading = false;
    }, 2000);
  }
}
