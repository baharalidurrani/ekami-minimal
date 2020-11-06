import { Component, Inject, OnDestroy, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { FetchResult } from '@apollo/client/core';
import { Observable, Subscription } from 'rxjs';
import {
  AddFloorToSiteGQL,
  AddFloorToSiteMutation,
} from '../../generated/graphql';

@Component({
  selector: 'app-add-floor',
  templateUrl: './add-floor.component.html',
  styleUrls: ['./add-floor.component.css'],
})
export class AddFloorComponent implements OnInit, OnDestroy {
  floorName: string;
  addFloor$: Observable<FetchResult<AddFloorToSiteMutation>>;
  addSiteSub: Subscription;
  constructor(
    public dialogRef: MatDialogRef<AddFloorComponent>,
    @Inject(MAT_DIALOG_DATA) public siteID: string,
    private addFloorQL: AddFloorToSiteGQL
  ) {}

  ngOnInit(): void {
    console.log('%cadd-floor.component.ts line:16 ngOnInit', 'color: #007acc;');
    this.dialogRef.updateSize('60%');
  }
  submitFloor() {
    // TODO
    // need to add floor image
    this.addFloor$ = this.addFloorQL.mutate({
      siteId: this.siteID,
      floor: { name: this.floorName, image: '' },
    });
    this.addSiteSub = this.addFloor$.subscribe((r) => {
      if (r.data.addFloorToSite.id) this.dialogRef.close(true);
      else this.dialogRef.close(false);
    });
  }

  ngOnDestroy() {
    if (this.addSiteSub) this.addSiteSub.unsubscribe();
  }
}
