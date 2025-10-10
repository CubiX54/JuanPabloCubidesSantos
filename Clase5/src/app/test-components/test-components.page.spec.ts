import { ComponentFixture, TestBed } from '@angular/core/testing';
import { TestComponentsPage } from './test-components.page';

describe('TestComponentsPage', () => {
  let component: TestComponentsPage;
  let fixture: ComponentFixture<TestComponentsPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponentsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
