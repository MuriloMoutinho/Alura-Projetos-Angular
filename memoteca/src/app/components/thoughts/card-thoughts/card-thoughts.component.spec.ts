import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardThoughtsComponent } from './card-thoughts.component';

describe('CardThoughtsComponent', () => {
  let component: CardThoughtsComponent;
  let fixture: ComponentFixture<CardThoughtsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CardThoughtsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CardThoughtsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
