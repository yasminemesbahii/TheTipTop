import { HttpClient, HttpHandler, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { LoginComponent } from '../login/login.component';

@Injectable({
  providedIn: 'root',
})
export class ApiAppService {
  constructor(public http: HttpClient) {}
  login(userData: any) {
    return this.http.post('http://34.16.134.192:7777/login', userData);
  }
  registerUser(userData: any) {
    return this.http.post('http://34.16.134.192:7777/users', userData);
  }
  registerEMP(userData: any) {
    return this.http.post('http://34.16.134.192:7777/users/EMP', userData);
  }
  toDashboard(token) {
    const headers = new HttpHeaders({
      'Content-type': 'application/json',
      authorization: `Bearer ${token}`,
    });
    return this.http.get('http://34.16.134.192:7777/dashbord', { headers: headers });
  }
  getPrixBy__v() {
    return this.http.get('http://34.16.134.192:7777/users');
  }
  sendMessage(nom: any, prenom: any, email: any, telephone: any, mesage: any) {
    const headers = new HttpHeaders({
      'Content-type': 'application/json',
    });
    return this.http.post(
      'http://34.16.134.192:7777/email' +
        '/' +
        nom +
        '/' +
        prenom +
        '/' +
        email +
        '/' +
        telephone +
        '/' +
        mesage,
      { headers: headers }
    );
  }

  getReclamation() {
    return this.http.get('http://34.16.134.192:7777/email');
  }
  search() {
    return this.http.get('http://34.16.134.192:7777/ChercherUserNop/');
  }
  emailused(email: any) {
    return this.http.get('http://34.16.134.192:7777/emailuse/' + email);
  }
}
