import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs/internal/Observable';

@Injectable({
  providedIn: 'root'
})
export class HttpService {

  url = "https://docs.google.com/forms/u/1/d/e/1FAIpQLSeQHuyu6XFU0UbTg0yGdviqIHMYgWnO8hkclhh-H6Vy4kmwdw/formResponse"

  constructor(private http: HttpClient) { }


  sendGoogleForms(data: any) {

    let body = new URLSearchParams();
    body.set('entry.2120540416', data.name);
    body.set('entry.695716956', data.last_name);
    body.set('entry.884778650', data.phone);
    body.set('entry.662918624', data.email);
    body.set('entry.2133181911', data.requirement);

    //   let options = {
    //     headers: new HttpHeaders().set('Content-Type', 'application/x-www-form-urlencoded')
    // };

    const headers = new HttpHeaders({
      'Content-Type': 'application/x-www-form-urlencoded'
    })

    return this.http
      .post(this.url, body.toString(), { headers });
  }

}
