import { Component, Input, OnInit, OnChanges } from '@angular/core';

import {
  trigger,
  state,
  style,
  animate,
  transition
} from '@angular/animations';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss'],
  animations: [
    trigger('navLiState', [
      state('0', style({
        height:'0px',
        position: 'absolute'
      })),
      state('1',   style({
        height:'50px',
        position: 'relative'
      })),
      transition('0 => 1', animate('500ms ease-in')),
      transition('1 => 0', animate('500ms ease-out'))
    ]),
    trigger('navUlState', [
      state('0', style({
      })),
      state('1',   style({
      })),
      transition('0 => 1', animate('500ms ease-in')),
      transition('1 => 0', animate('500ms ease-out'))
    ])
  ]
})
export class NavComponent implements OnInit {

   @Input() isNav : number = 0;

  constructor() { }

  ngOnInit() {
  }

  openNav() {
    this.isNav=1;
  }

  closeNav() {
    setTimeout(() => {
      this.isNav=0;
    }, 3000);
  }

}
