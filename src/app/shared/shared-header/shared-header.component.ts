import { Component, OnInit } from '@angular/core';
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
export class SharedHeaderComponent implements OnInit {

  ngOnInit() {
    console.log('Header component initialized') ;
  }
}
