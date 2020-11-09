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
      zone: { name: this.zoneForm.value.zoneName },
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
