import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SecundariasComponent } from './secundarias.component';

describe('SecundariasComponent', () => {
  let component: SecundariasComponent;
  let fixture: ComponentFixture<SecundariasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SecundariasComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SecundariasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
