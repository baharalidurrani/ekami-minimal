import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { AppService } from './app.service';
import { Dog } from './dog.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  constructor(private appService: AppService) {}
  images$: Observable<Dog>[] = [];

  ngOnInit() {
    for (let i = 0; i < 5; i++) {
      this.images$.push(this.appService.hitEndPoint());
      // this.images$ = [...this.images$, this.appService.hitEndPoint()];
    }
  }
}
