import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HeaderModifComponent } from './header-modif.component';

describe('HeaderModifComponent', () => {
  let component: HeaderModifComponent;
  let fixture: ComponentFixture<HeaderModifComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HeaderModifComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HeaderModifComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
