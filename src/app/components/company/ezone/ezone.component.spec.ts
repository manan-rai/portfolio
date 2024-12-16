import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EzoneComponent } from './ezone.component';

describe('EzoneComponent', () => {
  let component: EzoneComponent;
  let fixture: ComponentFixture<EzoneComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EzoneComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EzoneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
