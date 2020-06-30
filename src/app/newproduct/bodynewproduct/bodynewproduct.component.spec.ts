import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BodynewproductComponent } from './bodynewproduct.component';

describe('BodynewproductComponent', () => {
  let component: BodynewproductComponent;
  let fixture: ComponentFixture<BodynewproductComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BodynewproductComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BodynewproductComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
