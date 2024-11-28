import { Component, inject, OnInit, signal, ViewChild } from '@angular/core';
import { SharedserviceService } from '../../shared/services/sharedservice.service';
import { LoadingSpinnerServiceService } from '../../shared/services/loading-spinner-service.service';
import { sharedImports } from '../../shared/shared.materialImports';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort, Sort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { LiveAnnouncer } from '@angular/cdk/a11y';

@Component({
  selector: 'app-view-details',
  standalone: true,
  imports: [sharedImports],
  templateUrl: './view-details.component.html',
  styleUrl: './view-details.component.scss',
})
export class ViewDetailsComponent implements OnInit {
  //dependencies
  
  private sharedService = inject(SharedserviceService);
  private loadingSpinner = inject(LoadingSpinnerServiceService);
  private _liveAnnouncer = inject(LiveAnnouncer);

  userData = signal([]);

  // material table
  displayedColumns: string[] = ['id', 'type', 'public', 'createdAt'];
  dataSource = new MatTableDataSource<any>([]);
  resultsLength = 10;
  isLoadingResults = true;
  isRateLimitReached = false;
  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;
  
  ngOnInit(): void {
    this.loadingSpinner.setLoader(true);
    this.sharedService.getUserData().subscribe({
      next: (response) => {
        if(response) {
          this.loadingSpinner.setLoader(false);
          this.userData.set(response.default)
          this.dataSource.data = this.userData();
          this.resultsLength = this.userData().length;
          this.isLoadingResults = false;
        }
      },
      error: (error) => {
        console.error(error);
      },
      complete: () => {
        console.log('Request completed');
      },
    });
  }

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }

  sortData(sort:Sort){
    const data = this.dataSource.data.slice();
    if (sort.direction) {
      this._liveAnnouncer.announce(`Sorted ${sort.direction}ending`);
    } else {
      this._liveAnnouncer.announce('Sorting cleared');
    }
  }
}
