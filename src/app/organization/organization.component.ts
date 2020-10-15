import { Component, OnInit } from '@angular/core';
import { CameraType, UserType } from 'types/gql';
import { GraphService } from '../graph.service';

@Component({
  selector: 'app-organization',
  templateUrl: './organization.component.html',
  styleUrls: ['./organization.component.css'],
})
export class OrganizationComponent implements OnInit {
  camsLoading = true;
  userLoading = true;
  camsList: CameraType[];
  userOrg: UserType;

  constructor(private graphService: GraphService) {}

  ngOnInit(): void {
    this.graphService.camList$.subscribe((result) => {
      console.log('result.data.cams', result.data.cams);
      this.camsList = result.data.cams;
      this.camsLoading = result.loading;
    });
    this.graphService.userOrg$.subscribe((result) => {
      console.log('result.data.userOrganization', result.data.userOrganization);
      this.userOrg = result.data.userOrganization;
      this.userLoading = result.loading;
    });
    this.graphService.testMutation$.subscribe((value) => {
      console.log('Mutation: value.data.testEqual');
      console.log(value.data.testEqual);
    });
  }
}
