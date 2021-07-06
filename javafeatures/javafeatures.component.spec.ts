import { ComponentFixture, TestBed } from '@angular/core/testing';

import { JavafeaturesComponent } from './javafeatures.component';

describe('JavafeaturesComponent', () => {
  let component: JavafeaturesComponent;
  let fixture: ComponentFixture<JavafeaturesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ JavafeaturesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(JavafeaturesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
