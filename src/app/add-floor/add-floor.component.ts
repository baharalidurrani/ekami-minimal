import { Component, Inject, OnDestroy, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
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
  floorForm: FormGroup;
  addFloor$: Observable<FetchResult<AddFloorToSiteMutation>>;
  addSiteSub: Subscription;
  constructor(
    public dialogRef: MatDialogRef<AddFloorComponent>,
    @Inject(MAT_DIALOG_DATA) public siteID: string,
    private addFloorQL: AddFloorToSiteGQL,
    private formBuilder: FormBuilder
  ) {
    this.floorForm = this.formBuilder.group({
      floorName: new FormControl('', Validators.required),
    });
  }

  ngOnInit(): void {
    console.log('%cadd-floor.component.ts line:16 ngOnInit', 'color: #007acc;');
    this.dialogRef.updateSize('60%');
  }
  submitFloor() {
    // TODO
    // need to add floor image
    const IMAGE = `https://via.placeholder.com/640x480`;
    this.addFloor$ = this.addFloorQL.mutate({
      siteId: this.siteID,
      floor: { name: this.floorForm.value.floorName, image: IMAGE },
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
