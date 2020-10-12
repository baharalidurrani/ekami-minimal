import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-explorer',
  templateUrl: './explorer.component.html',
  styleUrls: ['./explorer.component.css'],
})
export class ExplorerComponent implements OnInit {
  constructor(private route: ActivatedRoute) {}
  param: string;

  ngOnInit(): void {
    this.route.paramMap.subscribe((params) => {
      this.param = params.get('orgID');
    });
  }
}
