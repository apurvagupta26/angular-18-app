import { Component, OnInit } from '@angular/core';
import { sharedImports } from '../../shared.materialImports';
import { SharedIconsComponent } from '../shared-icons/shared-icons.component';

@Component({
  selector: 'app-shared-header',
  standalone: true,
  imports: [
    ...sharedImports,
    SharedIconsComponent
  ],
  templateUrl: './shared-header.component.html',
  styleUrl: './shared-header.component.scss'
})
export class SharedHeaderComponent implements OnInit {

  ngOnInit(): void {
    
  }
}
