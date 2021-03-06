import { environment } from '../../environments/environment';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { NotificationService } from './notification.service';

const usersUrl = environment.authUrl;
@Injectable({
  providedIn: 'root',
})
export class AuthServicesService {
  user: any;
  isAuthenticated = false;
  isAdmin = false;
  isUser = false;
  response: any;
  data: any;
  constructor(
    private http: HttpClient,
    private toastr: NotificationService,
    private router: Router
  ) {}
  public authenticateUser(data: any) {
    return this.http.get(usersUrl).subscribe((response) => {
      console.log(response);
      this.user = response;
      this.data = data;
      this.authenticateUsers();
      this.navigateUser();
    });
  }
  authenticateUsers() {
    this.response = this.user.find((x: any) => {
      return x.email == this.data.email && x.password == this.data.password;
    });
  }
  navigateUser() {
    if (this.response) {
      this.checkRole();
    } else {
      this.toastr.showError('Invalid credential', 'Failed');
    }
  }
  checkRole() {
    this.isAuthenticated = true;
    if (this.response.role === 'admin') {
      this.isAdmin = true;
      this.isAuthenticated = true;
      this.toastr.showSuccess('logged in successfully', 'congratulations');
      this.router.navigate(['/AdminDashboard/dashboard']);
      localStorage.setItem('adminId', this.response.id);
      localStorage.setItem('AdminfirstName', this.response.firstName);
      localStorage.setItem('AdminlastName', this.response.lastName);

      localStorage.setItem('adminName', this.response.username);
    } else if (this.response.role === 'user') {
      this.isUser = true;
      this.isAuthenticated = true;
      this.toastr.showSuccess('logged in successfully', 'congratulations');
      this.router.navigate(['/UserlandingPage']);
      localStorage.setItem('id', this.response.id);
      localStorage.setItem('email', this.response.email);
      localStorage.setItem('firstName', this.response.firstName);
      localStorage.setItem('lastName', this.response.lastName);
      localStorage.setItem('userName', this.response.userName);
    } else {
      this.toastr.showError('invalid credential', 'failed');
    }
  }
}
