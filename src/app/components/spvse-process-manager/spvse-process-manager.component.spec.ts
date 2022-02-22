import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SpvseProcessManagerComponent } from './spvse-process-manager.component';

describe('SpvseProcessManagerComponent', () => {
  let component: SpvseProcessManagerComponent;
  let fixture: ComponentFixture<SpvseProcessManagerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SpvseProcessManagerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SpvseProcessManagerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
