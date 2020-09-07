import { SharedAnimations } from 'src/app/shared/animations/shared-animations';
import { Component, OnInit } from '@angular/core';
import { ForrutesComponent } from '../../landing-v3/forrutes/forrutes.component';
import { StartComponent } from '../../landing-v3/start/start.component';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-intro-three',
  templateUrl: './intro-three.component.html',
  styleUrls: ['./intro-three.component.scss'],
  animations:[SharedAnimations]
})
export class IntroThreeComponent implements OnInit {
  constructor(public dialog: MatDialog) { }

  ngOnInit() {
  }
  openDialog(): void {
    const dialogRef = this.dialog.open(ForrutesComponent, {
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

}
