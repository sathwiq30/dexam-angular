import { Component, OnInit } from '@angular/core';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { SigninComponent } from 'src/app/auth/signin/signin.component';
import { SignupComponent } from 'src/app/auth/signup/signup.component';
import { SgnupEducatorComponent } from 'src/app/auth/sgnup-educator/sgnup-educator.component';

@Component({
  selector: 'app-forroutes',
  templateUrl: './forroutes.component.html',
  styleUrls: ['./forroutes.component.css']
})
export class ForroutesComponent implements OnInit {

  constructor(  public dialog: MatDialog,  public dialogRef: MatDialogRef<ForroutesComponent>){  

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
  ngOnInit() {
  }

}
