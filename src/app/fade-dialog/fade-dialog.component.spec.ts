import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FadeDialogComponent } from './fade-dialog.component';

describe('FadeDialogComponent', () => {
  let component: FadeDialogComponent;
  let fixture: ComponentFixture<FadeDialogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FadeDialogComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FadeDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
