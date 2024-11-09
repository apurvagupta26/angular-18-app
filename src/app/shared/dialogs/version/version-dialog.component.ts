import { Component, inject, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import versions from '../../../../_versions';
import { sharedImports } from '../../shared.materialImports';

@Component({
  selector: 'app-version',
  standalone: true,
  imports: [...sharedImports],
  templateUrl: './version-dialog.component.html',
  styleUrl: './version-dialog.component.scss',
})
export class VersionDialogComponent implements OnInit {
  appVersion = versions;
  date:string | undefined
  
  readonly dialogRef = inject(MatDialogRef<VersionDialogComponent>);

  ngOnInit(): void {
    const versionDate = new Date(this.appVersion.versionDate);
    this.date = versionDate.toLocaleDateString('en-US');
  }

  onClose() {
    this.dialogRef.close();
  }
}
