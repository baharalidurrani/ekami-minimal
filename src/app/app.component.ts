import { Component, OnInit } from '@angular/core';
import {
  TestEqualGQL,
  TestRandomGQL,
  UserOrganizationGQL,
} from '../generated/graphql';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  constructor(
    private userOrg: UserOrganizationGQL,
    private testEqual: TestEqualGQL,
    private testRandom: TestRandomGQL
  ) {}
  ngOnInit(): void {
    this.userOrg.fetch().subscribe((result) => {
      console.log('Yay new query: ', result.data.userOrganization);
    });
    this.testEqual.mutate({ n1: 1, n2: 1 }).subscribe((r) => {
      console.log('Yay new Mutation', r.data.testEqual);
    });
    this.testRandom.fetch().subscribe((r) => {
      console.log('Yay new testQuery', r.data.testRandom);
    });
  }
}
