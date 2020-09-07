import { Component, OnInit } from '@angular/core';

import { MatCalendarCellCssClasses } from '@angular/material/datepicker';

@Component({
  selector: 'app-mycaleder',
  templateUrl: './mycaleder.component.html',
  styleUrls: ['./mycaleder.component.css']
})
export class MycalederComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  selectedDate: any; 
  onSelect(event){
    console.log(event);
    this.selectedDate= event;
  }
  dateClass() {
    return (date: Date): MatCalendarCellCssClasses => {
      if (date.getDate() === 1) {
        return 'special-date';
      } else {
        return;
      }
    };
  }

} 