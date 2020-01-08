import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ComtypeComponent } from './comtype.component';

describe('ComtypeComponent', () => {
  let component: ComtypeComponent;
  let fixture: ComponentFixture<ComtypeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ComtypeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ComtypeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
