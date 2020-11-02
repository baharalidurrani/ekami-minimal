import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-modules',
  templateUrl: './modules.component.html',
  styleUrls: ['./modules.component.css'],
})
export class ModulesComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {
    console.log(
      '%cmodules.component.ts line:12 ngOnInit',
      'color: white; background-color: #26bfa5;'
    );
  }
}
