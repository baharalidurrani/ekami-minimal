import { Component, OnInit } from '@angular/core';
import { CameraType, UserType } from '../../generated/graphql';

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

  constructor() {}

  ngOnInit(): void {}
}
