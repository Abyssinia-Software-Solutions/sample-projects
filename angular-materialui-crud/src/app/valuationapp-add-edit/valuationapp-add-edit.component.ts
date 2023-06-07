import { Component,  Inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { CoreService } from '../core/core.service';
import { ValuationService } from '../services/valuation.service';

@Component({
  selector: 'app-valuationapp-add-edit',
  templateUrl: './valuationapp-add-edit.component.html',
  styleUrls: ['./valuationapp-add-edit.component.scss']
})
export class ValuationappAddEditComponent implements OnInit {
  valuationForm: FormGroup;

  constructor(
    private _fb: FormBuilder,
    private _valuationService: ValuationService,
    private _dialogRef: MatDialogRef<ValuationappAddEditComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,
    private _coreService: CoreService
  ) {
    this.valuationForm = this._fb.group({
      amountofcreditrequest: 0,
      requestedby: 1,
      requestedbyname: 'CIBD',
      applicantname: 'Biruk Abel',
      propertyowner: 'Biruk Abel',
      applicationstatus: 1,
      remark: '',
      requestdate:new Date(),
    });
  }


  ngOnInit(): void {
    this.valuationForm.patchValue(this.data);
  }

  onFormSubmit() {
    if (this.valuationForm.valid) {
     if (this.data) {
        this._valuationService
          .updateValuation(this.data.id, this.valuationForm.value)
          .subscribe({
            next: (val: any) => {
              this._coreService.openSnackBar('Valuation application updated!');
              this._dialogRef.close(true);
            },
            error: (err: any) => {
              console.error(err);
            },
          });
      } else {
        this._valuationService.saveValuation(this.valuationForm.value).subscribe({
          next: (val: any) => {
            this._coreService.openSnackBar('Valuation saved successfully');
            this._dialogRef.close(true);
          },
          error: (err: any) => {
            console.error(err);
          },
        });
      //}
    }
  }
}
}
