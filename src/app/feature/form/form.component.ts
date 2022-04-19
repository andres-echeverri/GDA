import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { HttpService } from '../../services/http.service';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss']
})
export class FormComponent implements OnInit {

  form: FormGroup;
  sentForm = false

  constructor(private http: HttpService) {

  }

  ngOnInit(): void {
    this.buildForm()
  }

  OnSubmit() {
    this.http.sendGoogleForms(this.form.value).subscribe(resp => {
      console.log("llamado exitoso", resp);
      this.sentForm = true
    },
    (err)=> {
      console.log("Ocurrio un error", err);
      this.sentForm = true
    }
    );

  }

  private buildForm() {
    this.form = new FormGroup({
      name: new FormControl('', [Validators.required]),
      last_name: new FormControl('', Validators.required),
      phone: new FormControl('', [Validators.required]),
      email: new FormControl('', [Validators.required, Validators.email]),
      requirement: new FormControl('', Validators.required),
    });
  }

  sendOther(){
    this.sentForm = false
    this.buildForm()
  }

  limpiar() {
    this.form.reset()
  }

}
