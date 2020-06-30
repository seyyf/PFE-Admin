import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HeadernewproductComponent } from './headernewproduct.component';

describe('HeadernewproductComponent', () => {
  let component: HeadernewproductComponent;
  let fixture: ComponentFixture<HeadernewproductComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HeadernewproductComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HeadernewproductComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
