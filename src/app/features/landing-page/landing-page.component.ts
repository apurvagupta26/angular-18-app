import { Component } from '@angular/core';
import { SharedHeaderComponent } from '../../shared/components/shared-header/shared-header.component';
import { SharedIconsComponent } from '../../shared/components/shared-icons/shared-icons.component';
import { ViewDetailsComponent } from "../view-details/view-details.component";
import { LoadingSpinnerComponent } from "../../shared/components/loading-spinner/loading-spinner.component";

@Component({
  selector: 'app-landing-page',
  standalone: true,
  imports: [SharedHeaderComponent, SharedIconsComponent, ViewDetailsComponent, LoadingSpinnerComponent],
  templateUrl: './landing-page.component.html',
  styleUrl: './landing-page.component.scss'
})
export class LandingPageComponent {

}
