import { Component, OnInit } from '@angular/core';
import { GraphService } from '../graph.service';

@Component({
  selector: 'app-graph',
  templateUrl: './graph.component.html',
  styleUrls: ['./graph.component.css'],
})
export class GraphComponent implements OnInit {
  loading = true;
  camsList: any;
  userOrg: any;

  constructor(private graphService: GraphService) {}

  async ngOnInit(): Promise<void> {
    this.graphService.userOrg$.subscribe((result) => {
      this.userOrg = result.data;
      this.loading = result.loading;
    });
  }
}
