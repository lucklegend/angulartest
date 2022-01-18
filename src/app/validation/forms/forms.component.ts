import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { ValidationService } from 'src/app/services/validation.service';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-forms',
  templateUrl: './forms.component.html',
  styleUrls: ['./forms.component.scss']
})
export class FormsComponent implements OnInit {

  infoForm: FormGroup = new FormGroup({});
  message:any;
  dataLoaded:boolean = true;

  constructor(private formBuilder: FormBuilder,
    private validationService: ValidationService,
    private snackBar: MatSnackBar
  ) { }

  ngOnInit(): void {
    this.infoForm = this.formBuilder.group({
      'sector' : new FormControl('', [Validators.required]),
      'email' : new FormControl('', [Validators.required]),
      'aveturnover' : new FormControl('', [Validators.required]),
      'growingincome' : new FormControl('', [Validators.required]),
      'ebitda' : new FormControl('', [Validators.required]),
      'avenetincome' : new FormControl('', [Validators.required]),
      'pos_result' : new FormControl('', [Validators.required]),
      'netfindebt' : new FormControl('', [Validators.required]),
      'fixedassets' : new FormControl('', [Validators.required]),
      'companypercent' : new FormControl('', [Validators.required]),
      'perturncustomer' : new FormControl('', [Validators.required]),
      'audited' : new FormControl('', [Validators.required]),
      'pur_operations' : new FormControl('', [Validators.required]),
      'sell_company' : new FormControl('', [Validators.required]),
    });
  }

  reviewForm(){
    this.validationService.sendValidation(this.infoForm.value).subscribe(data=>{
      console.log(data);
      this.message = data;
      this.snackBar.open('Form Sent');
      this.dataLoaded=false;
    });
  }
}
