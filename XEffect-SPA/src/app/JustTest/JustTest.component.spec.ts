/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { JustTestComponent } from './JustTest.component';

describe('JustTestComponent', () => {
  let component: JustTestComponent;
  let fixture: ComponentFixture<JustTestComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ JustTestComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(JustTestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
