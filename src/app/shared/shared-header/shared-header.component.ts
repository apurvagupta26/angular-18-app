import { Component } from '@angular/core';
import { sharedImports } from '../shared.materialImports';

@Component({
  selector: 'app-shared-header',
  standalone: true,
  imports: [
    ...sharedImports
  ],
  templateUrl: './shared-header.component.html',
  styleUrl: './shared-header.component.scss'
})
export class SharedHeaderComponent {

}
