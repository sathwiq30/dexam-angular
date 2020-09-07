import { Component, OnInit } from '@angular/core';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-forrutes',
  templateUrl: './forrutes.component.html',
  styleUrls: ['./forrutes.component.scss']
})
export class ForrutesComponent implements OnInit {
 
  ngOnInit(): void {
  }
  constructor(  public dialog: MatDialog,  public dialogRef: MatDialogRef<ForrutesComponent>){  

  } 
  openDialog(): void {
    // const dialogRef = this.dialog.open(SignupComponent, {
    //   width: '1050px'   
    // });
    this.onNoClick()

    // dialogRef.afterClosed().subscribe(result => {
    //   console.log('The dialog was closed'); 
    // });
}onNoClick(): void {
  this.dialogRef.close();
}
}
