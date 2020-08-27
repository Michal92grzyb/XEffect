/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { XEffectGridComponent } from './XEffectGrid.component';

describe('XEffectGridComponent', () => {
  let component: XEffectGridComponent;
  let fixture: ComponentFixture<XEffectGridComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ XEffectGridComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(XEffectGridComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
