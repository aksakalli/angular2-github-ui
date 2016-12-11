/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { TopReposComponent } from './top-repos.component';

describe('TopReposComponent', () => {
  let component: TopReposComponent;
  let fixture: ComponentFixture<TopReposComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TopReposComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TopReposComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
