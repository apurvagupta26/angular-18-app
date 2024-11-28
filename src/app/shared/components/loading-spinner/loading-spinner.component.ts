import { Component, inject } from '@angular/core';
import { LoadingSpinnerServiceService } from '../../services/loading-spinner-service.service';
import { NgIf } from '@angular/common';

@Component({
  selector: 'app-loading-spinner',
  standalone: true,
  imports: [NgIf],
  templateUrl: './loading-spinner.component.html',
  styleUrl: './loading-spinner.component.scss'
})
export class LoadingSpinnerComponent {

  public loader = inject(LoadingSpinnerServiceService);


  constructor() {
    console.log("loading spinner activated");
  }

}
