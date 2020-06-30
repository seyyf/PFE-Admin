import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HeaderAnnonceComponent } from './header-annonce.component';

describe('HeaderAnnonceComponent', () => {
  let component: HeaderAnnonceComponent;
  let fixture: ComponentFixture<HeaderAnnonceComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HeaderAnnonceComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HeaderAnnonceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
