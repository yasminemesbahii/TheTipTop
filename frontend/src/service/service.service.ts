import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { NgxSpinnerService } from 'ngx-spinner';
@Injectable({
  providedIn: 'root',
})
export class ServiceService {
  public iscompleted1: boolean = false;
  public iscompleted2: boolean = false;
  public iscompleted3: boolean = false;
  public iscompleted4: boolean = false;
  public iscompleted5: boolean = false;
  public Gain: any;
  //private baseUri: string = 'http://backend:7777';
  private baseUri: string = 'http://localhost:7777';
  constructor(private http: HttpClient, public spinner: NgxSpinnerService) {}
  /*getPrixBy__v(uid:any){
    return this.http.get(this.baseUri+'/users/'+ uid);
  }*/
  getUser(uid: any) {
    return this.http.get(this.baseUri + '/finduserbyid/' + uid);
  }
  postGain(uid: any, nom: any, description: any) {
    const headers = { 'content-type': 'application/json' };
    return this.http.post(
      this.baseUri + '/addgain/' + uid + '/' + nom + '/' + description,
      { headers: headers }
    );
  }
  get_refParticipation(RefT: any) {
    return this.http.get(this.baseUri + '/identiqueTicketq/' + RefT);
  }
  postEtat_P(uid: any) {
    const headers = { 'content-type': 'application/json' };
    return this.http.put(this.baseUri + '/updateEtat/' + uid, {
      headers: headers,
    });
  }
  search() {
    return this.http.get(this.baseUri + '/chercherUser/');
  }
  AfficherTNU(){
     return this.http.get(this.baseUri + '/AfficherTicketNU/')
  }
  AfficherTU(){
    return this.http.get(this.baseUri + '/AfficherTicketU/')
 }
  update_etatObtention(uid: any) {
    const headers = { 'content-type': 'application/json' };
    return this.http.put(this.baseUri + '/UpdateEtatobtention/' + uid, {
      headers: headers,
    });
  }
  update_etatRepond(uid: any) {
    const headers = { 'content-type': 'application/json' };
    return this.http.put(this.baseUri + '/UpdateEtatRepond/' + uid, {
      headers: headers,
    });
  }

  get_lotS_H(uid: any) {
    return this.http.get(this.baseUri + '/getLots_H/' + uid);
  }
  public loading() {
    this.spinner.show();
    setTimeout(() => {
      /** spinner ends after 5 seconds */
      this.spinner.hide();
    }, 1500);
  }
  Subscribed(email: any) {
    const headers = { 'content-type': 'application/json' };
    return this.http.post(this.baseUri + '/EmailChimp/' + email, {
      headers: headers,
    });
  }
  addticketUser(uid: any, ticket: any) {
    const headers = { 'content-type': 'application/json' };
    return this.http.post(
      this.baseUri + '/addticketUser/' + uid + '/' + ticket,
      { headers: headers }
    );
  }
  addtotaltciket(nombreT: any) {
    const headers = { 'content-type': 'application/json' };
    return this.http.post(this.baseUri + '/AddticketR/' + nombreT, {
      headers: headers,
    });
  }
  deleteAccount(uid:any){
    const headers = { 'content-type': 'application/json'} 
    return this.http.delete(this.baseUri+'/users/'+uid,{'headers':headers})
  }
  update_etatUtilastionTicket(Ref:any){
    const headers = { 'content-type': 'application/json'} 
    return this.http.put(this.baseUri+'/ChangerEtatUtiliseT/'+Ref,{'headers':headers})
    
  }
}
