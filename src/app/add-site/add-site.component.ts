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
import { NewSiteGQL, NewSiteMutation } from '../../generated/graphql';

@Component({
  selector: 'app-add-site',
  templateUrl: './add-site.component.html',
  styleUrls: ['./add-site.component.css'],
})
export class AddSiteComponent implements OnInit, OnDestroy {
  siteForm: FormGroup;
  addSite$: Observable<FetchResult<NewSiteMutation>>;
  addSiteSub: Subscription;
  constructor(
    public dialogRef: MatDialogRef<AddSiteComponent>,
    @Inject(MAT_DIALOG_DATA) public orgID: string,
    private formBuilder: FormBuilder,
    private newSiteQL: NewSiteGQL
  ) {
    this.siteForm = this.formBuilder.group({
      name: new FormControl('', Validators.required),
      location: new FormControl('', Validators.required),
    });
  }

  ngOnInit(): void {
    this.dialogRef.updateSize('60%');
  }

  submitSite() {
    this.addSite$ = this.newSiteQL.mutate(
      {
        site: {
          name: this.siteForm.value.name,
          location: this.siteForm.value.location,
        },
      },
      {
        errorPolicy: 'all',
      }
    );
    this.addSiteSub = this.addSite$.subscribe((r) => {
      if (r.data.newSite.id) this.dialogRef.close(true);
      else if (r.errors) throw r.errors;
      else this.dialogRef.close(false);
    });
  }

  ngOnDestroy() {
    if (this.addSiteSub) this.addSiteSub.unsubscribe();
  }
}
