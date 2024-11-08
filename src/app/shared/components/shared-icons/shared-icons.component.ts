import { Component, inject } from '@angular/core';
import { MatIconRegistry } from '@angular/material/icon';
import { DomSanitizer } from '@angular/platform-browser';
import { sharedImports } from '../../shared.materialImports';

@Component({
  selector: 'app-shared-icons',
  standalone: true,
  imports: [...sharedImports],
  templateUrl: './shared-icons.component.html',
  styleUrl: './shared-icons.component.scss',
})
export class SharedIconsComponent {
  // dependency injections in Angular v18
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
        this.domSanitizer.bypassSecurityTrustResourceUrl(`../../../assets/icons/svgs/${icon}.svg`)
      );
    });
  }
}
