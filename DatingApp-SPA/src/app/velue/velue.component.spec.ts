/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { VelueComponent } from './velue.component';

describe('VelueComponent', () => {
  let component: VelueComponent;
  let fixture: ComponentFixture<VelueComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VelueComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VelueComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
