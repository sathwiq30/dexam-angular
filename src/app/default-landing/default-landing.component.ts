import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { ForroutesComponent } from './forroutes/forroutes.component';
import { MatDialog } from '@angular/material/dialog';
import { StartComponent } from './start/start.component';

@Component({
  selector: 'app-default-landing',
  templateUrl: './default-landing.component.html',
  styleUrls: ['./default-landing.component.css']
})
export class DefaultLandingComponent   {

 
  constructor(  public dialog: MatDialog){  

  } 
  openDialog(): void {
    const dialogRef = this.dialog.open(ForroutesComponent, {
      width: '1050px' 
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed'); 
    });
}
openDialog1(): void {
  const dialogRef = this.dialog.open(StartComponent, {
    width: '1050px' 
  });

  dialogRef.afterClosed().subscribe(result => {
    console.log('The dialog was closed'); 
  });
}
  @Output() open = new EventEmitter()
}
