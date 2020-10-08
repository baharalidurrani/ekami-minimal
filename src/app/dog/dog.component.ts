import { Component, Input, OnInit } from '@angular/core';
import { Dog } from '../dog.model';

@Component({
  selector: 'app-dog',
  templateUrl: './dog.component.html',
  styleUrls: ['./dog.component.css'],
})
export class DogComponent implements OnInit {
  @Input() url: Dog;
  constructor() {}

  ngOnInit(): void {}
}
