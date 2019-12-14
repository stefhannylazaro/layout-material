import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FilledComponent } from './filled.component';

describe('FilledComponent', () => {
  let component: FilledComponent;
  let fixture: ComponentFixture<FilledComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FilledComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FilledComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
