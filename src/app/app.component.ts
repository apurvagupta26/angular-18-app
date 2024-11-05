import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { SharedHeaderComponent } from './shared/shared-header/shared-header.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, SharedHeaderComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'angular-18-app';
}
