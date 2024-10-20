import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
@Component({
  selector: 'app-success-message',
  templateUrl: './success-message.component.html',
  styleUrl: './success-message.component.css'
})
export class SuccessMessageComponent {
  constructor(
    public dialogRef: MatDialogRef<SuccessMessageComponent>,
    @Inject(MAT_DIALOG_DATA) public data: { message: string }
  ) {}
  close(): void {
    this.dialogRef.close();
    window.location.reload();
  }
}

