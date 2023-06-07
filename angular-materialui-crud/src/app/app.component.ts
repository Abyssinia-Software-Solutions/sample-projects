import { Component, OnInit, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { EmpAddEditComponent } from './emp-add-edit/emp-add-edit.component';
import { ValuationappAddEditComponent } from './valuationapp-add-edit/valuationapp-add-edit.component';
import { ValuationService } from './services/valuation.service';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { CoreService } from './core/core.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  displayedColumns: string[] = [
    'amountofcreditrequest',
    'requestedbyname',
    'applicantname',
    'propertyowner',
    'requestdate',
    'remark',
    'action',
  ];
  dataSource!: MatTableDataSource<any>;

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;

  constructor(
    private _dialog: MatDialog,
    private _valuationService: ValuationService,
    private _coreService: CoreService
  ) {}

  ngOnInit(): void {
    this.getAllValuations();
  }

  openAddEditEmpForm() {
    const dialogRef = this._dialog.open(ValuationappAddEditComponent);
    dialogRef.afterClosed().subscribe({
      next: (val) => {
        if (val) {
          this.getAllValuations();
        }
      },
    });
  }

  openAddEditValuationForm() {
    const dialogRef = this._dialog.open(ValuationappAddEditComponent);
    dialogRef.afterClosed().subscribe({
      next: (val) => {
        if (val) {
          this.getAllValuations();
        }
      },
    });
  }


  getAllValuations() {
    this._valuationService.getValuationApplication().subscribe({
      next: (res) => {
        this.dataSource = new MatTableDataSource(res);
        this.dataSource.sort = this.sort;
        this.dataSource.paginator = this.paginator;
      },
      error: console.log,
    });
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }

  /*
  deleteEmployee(id: number) {
    this._valuationService.deleteEmployee(id).subscribe({
      next: (res) => {
        this._coreService.openSnackBar('Valuation application deleted!', 'done');
        this.getAllValuations();
      },
      error: console.log,
    });
  }*/

  openEditForm(data: any) {
    const dialogRef = this._dialog.open(ValuationappAddEditComponent, {
      data,
    });

    dialogRef.afterClosed().subscribe({
      next: (val) => {
        if (val) {
          this.getAllValuations();
        }
      },
    });
  }
}
