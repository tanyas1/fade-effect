import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FadeEffectComponent } from './fade-effect.component';

describe('FadeEffectComponent', () => {
  let component: FadeEffectComponent;
  let fixture: ComponentFixture<FadeEffectComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FadeEffectComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FadeEffectComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
