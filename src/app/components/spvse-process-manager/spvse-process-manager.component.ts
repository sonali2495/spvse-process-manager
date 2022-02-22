import { Component, OnInit } from '@angular/core';
export interface PeriodicElement {
  name: string;
  modified: string;
  
}
const ELEMENT_DATA: PeriodicElement[] = [
  {name: 'London Irish', modified: '24th April 2018 23:50:55'},
  
];

@Component({
  selector: 'app-spvse-process-manager',
  templateUrl: './spvse-process-manager.component.html',
  styleUrls: ['./spvse-process-manager.component.scss']
})

export class SpvseProcessManagerComponent implements OnInit {
  displayedColumns: string[] = ['name', 'modified', 'active', 'start', 'stop', 'delete' ];
  dataSource = ELEMENT_DATA;
  constructor() { }

  ngOnInit(): void {
  }

}
