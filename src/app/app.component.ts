import { Component, inject } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { SharedIconsComponent } from "./shared/components/shared-icons/shared-icons.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, SharedIconsComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
 
}
