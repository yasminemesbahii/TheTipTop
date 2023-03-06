import { HttpClient, HttpHandler, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { LoginComponent } from '../login/login.component';

@Injectable({
  providedIn: 'root',
})
export class ApiAppService {
  constructor(public http: HttpClient) {}
  login(userData: any) {
    return this.http.post('https://f2i-ao21b-ym-mel.fr/api/login', userData);
  }
  registerUser(userData: any) {
    return this.http.post('https://f2i-ao21b-ym-mel.fr/api/users', userData);
  }
  registerEMP(userData: any) {
    return this.http.post('https://f2i-ao21b-ym-mel.fr/api/users/EMP', userData);
  }
  toDashboard(token) {
    const headers = new HttpHeaders({
      'Content-type': 'application/json',
      authorization: `Bearer ${token}`,
    });
    return this.http.get('https://f2i-ao21b-ym-mel.fr/api/dashbord', { headers: headers });
  }
  getPrixBy__v() {
    return this.http.get('https://f2i-ao21b-ym-mel.fr/api/users');
  }
  sendMessage(nom: any, prenom: any, email: any, telephone: any, mesage: any) {
    const headers = new HttpHeaders({
      'Content-type': 'application/json',
    });
    return this.http.post(
      'https://f2i-ao21b-ym-mel.fr/api/email' +
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
    return this.http.get('https://f2i-ao21b-ym-mel.fr/api/email');
  }
  search() {
    return this.http.get('https://f2i-ao21b-ym-mel.fr/api/ChercherUserNop/');
  }
  emailused(email: any) {
    return this.http.get('https://f2i-ao21b-ym-mel.fr/api/emailuse/' + email);
  }
}
