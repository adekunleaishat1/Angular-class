import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OnecontactComponent } from './onecontact.component';

describe('OnecontactComponent', () => {
  let component: OnecontactComponent;
  let fixture: ComponentFixture<OnecontactComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [OnecontactComponent]
    });
    fixture = TestBed.createComponent(OnecontactComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
