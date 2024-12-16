import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MediflowComponent } from './mediflow.component';

describe('MediflowComponent', () => {
  let component: MediflowComponent;
  let fixture: ComponentFixture<MediflowComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MediflowComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MediflowComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
