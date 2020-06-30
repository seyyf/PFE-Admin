import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BodyAnnonceComponent } from './body-annonce.component';

describe('BodyAnnonceComponent', () => {
  let component: BodyAnnonceComponent;
  let fixture: ComponentFixture<BodyAnnonceComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BodyAnnonceComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BodyAnnonceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
