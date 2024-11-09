import { Component, inject, OnInit } from '@angular/core';
import { sharedImports } from '../../shared.materialImports';
import { SharedIconsComponent } from '../shared-icons/shared-icons.component';
import { VersionDialogComponent } from '../../dialogs/version/version-dialog.component';
import { MatDialog } from '@angular/material/dialog';

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
  readonly dialog = inject(MatDialog);

  ngOnInit(): void {
    
  }

  openDialog(): void {
    this.dialog.open(VersionDialogComponent, {
      
    });
  }
}
