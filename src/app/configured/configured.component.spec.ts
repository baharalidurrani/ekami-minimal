import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConfiguredComponent } from './configured.component';

describe('ConfiguredComponent', () => {
  let component: ConfiguredComponent;
  let fixture: ComponentFixture<ConfiguredComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ConfiguredComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ConfiguredComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
