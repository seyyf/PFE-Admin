import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BodyModifComponent } from './body-modif.component';

describe('BodyModifComponent', () => {
  let component: BodyModifComponent;
  let fixture: ComponentFixture<BodyModifComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BodyModifComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BodyModifComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
