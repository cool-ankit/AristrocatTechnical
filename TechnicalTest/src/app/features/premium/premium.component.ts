import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { PremiumService } from './premium.service';

@Component({
  selector: 'app-premium',
  templateUrl: './premium.component.html',
  styleUrls: ['./premium.component.scss']
})
export class PremiumComponent implements OnInit {

  premiumValue: any;
  formGroup: FormGroup;
  getOccuaptionList: Object;
  constructor(private fb: FormBuilder, private premiumService: PremiumService) { }

  ngOnInit(): void {
    this.premiumService.getOccupationList().subscribe((response) => {
      console.log(response);

      this.getOccuaptionList = response;
    })

    this.createForm();
  }

  createForm() {
    this.formGroup = this.fb.group({
      name: ['', Validators.required],
      age: ['', Validators.required],
      dateOfBirth: ['', Validators.required],
      occupation: ['', Validators.required],
      sumAssured: ['', Validators.required],

    })
  }

  onClick() {
    console.log(this.formGroup.value);
    this.submitform();

  }

  onChange(event) {
    this.submitform();
  }

  submitform() {

    if (this.formGroup.valid) {
      this.premiumService.postvalues(this.formGroup.value).subscribe((response) => {
        console.log(response);
        this.premiumValue = response;
      })
    }
    else {
      this.formGroup.get('dateOfBirth').markAsDirty();
      this.formGroup.markAllAsTouched();
    }
  }

}
