import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SgnupEducatorComponent } from './sgnup-educator.component';

describe('SgnupEducatorComponent', () => {
  let component: SgnupEducatorComponent;
  let fixture: ComponentFixture<SgnupEducatorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SgnupEducatorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SgnupEducatorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
