import { Component, Inject, OnDestroy, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { FetchResult } from '@apollo/client/core';
import { Observable, Subscription } from 'rxjs';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
import {
  AddZoneToFloorGQL,
  AddZoneToFloorMutation,
} from '../../generated/graphql';

const CANVAS_REC = `{"originX":"center","originY":"center","opacity":2,"height":120,"width":250,"fill":null,"left":0,"top":0,"transparentCorners":false,"stroke":"black","strokeWidth":1.5,"selectable":true}`;
const CANVAS_TEXT = `{"fontSize":13,"originX":"center","originY":"center","selectable":false,"fill":"#ff9e52","top":55,"left":0}`;
const CANVAS_GROUP = `{"top":150,"left":150,"translateX":518.324,"translateY":164.6756,"cacheTranslationX":156.4054054054052,"cacheTranslationY":127.59459459459448,"cacheWidth":312.8108108108104,"cacheHeight":256,"zoomX":1.2432432432432414,"zoomY":1.2432432432432414,"scaleX":0.9945945945945931,"scaleY":0.9945945945945931,"lockMovementY":false,"loackMovementX":false,"selectable":true}`;

@Component({
  selector: 'app-add-zone',
  templateUrl: './add-zone.component.html',
  styleUrls: ['./add-zone.component.css'],
})
export class AddZoneComponent implements OnInit, OnDestroy {
  zoneForm: FormGroup;
  addZone$: Observable<FetchResult<AddZoneToFloorMutation>>;
  addZoneSub: Subscription;
  constructor(
    public dialogRef: MatDialogRef<AddZoneComponent>,
    @Inject(MAT_DIALOG_DATA) public floorID: string,
    private addZoneQL: AddZoneToFloorGQL,
    private formBuilder: FormBuilder
  ) {
    this.zoneForm = this.formBuilder.group({
      zoneName: new FormControl('', Validators.required),
    });
  }

  ngOnInit(): void {
    console.log('%cadd-zone.component.ts line:18 ngOnInit', 'color: #007acc;');
    this.dialogRef.updateSize('60%');
  }

  submitZone() {
    // TODO
    // Need to include other details like:
    // canvasText
    // canvasRect
    // parent
    // etc
    this.addZone$ = this.addZoneQL.mutate({
      floorId: this.floorID,
      zone: {
        name: this.zoneForm.value.zoneName,
        canvasGroup: CANVAS_GROUP,
        canvasText: CANVAS_TEXT,
        canvasRect: CANVAS_REC,
      },
    });
    this.addZoneSub = this.addZone$.subscribe((r) => {
      if (r.data.addZoneToFloor.id) this.dialogRef.close(true);
      else this.dialogRef.close(false);
    });
  }

  ngOnDestroy() {
    if (this.addZoneSub) this.addZoneSub.unsubscribe();
  }
}
