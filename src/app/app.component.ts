import { Component, OnInit } from '@angular/core';
import { GraphService } from './graph.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  constructor(private graphService: GraphService) {}
  ngOnInit(): void {
    this.graphService.userOrgQuery();
    this.graphService.camsQuery();
    this.graphService.testSub();
  }
}
