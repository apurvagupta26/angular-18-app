import { Component, inject } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { SharedHeaderComponent } from './shared/shared-header/shared-header.component';
import { MatIconRegistry } from '@angular/material/icon';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, SharedHeaderComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {

  private matIconRegistry = inject(MatIconRegistry);
  private domSanitizer = inject(DomSanitizer);

  constructor() {
    const svgIconList = [
      'dashboard',
      'arrow-forward',
      'settings'
    ];

    svgIconList.forEach((icon: string) => {
      this.matIconRegistry.addSvgIcon(
        icon,
        this.domSanitizer.bypassSecurityTrustResourceUrl(`${icon}.svg`)
      );
    });
  }
}
