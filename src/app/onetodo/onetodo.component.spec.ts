import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OnetodoComponent } from './onetodo.component';

describe('OnetodoComponent', () => {
  let component: OnetodoComponent;
  let fixture: ComponentFixture<OnetodoComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [OnetodoComponent]
    });
    fixture = TestBed.createComponent(OnetodoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
