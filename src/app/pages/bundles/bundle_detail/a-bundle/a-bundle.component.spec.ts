import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ABundleComponent } from './a-bundle.component';

describe('ABundleComponent', () => {
  let component: ABundleComponent;
  let fixture: ComponentFixture<ABundleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ABundleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ABundleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
