import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GameControlComponent } from './game-control.component';

describe('GameControlComponent', () => {
  let component: GameControlComponent;
  let fixture: ComponentFixture<GameControlComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GameControlComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GameControlComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  // TODO: Write Jest tests

  it('should start the counter when start button is clicked', () => {

  });

  it('should stop the counter when stop button is clicked', () => {
  });

  it('should emit counter value when counter is running', () => {
  });

  it('should not emit counter value when counter is not running', () => {
  });

  it('should destroy the component when ngOnDestroy is called', () => {
  });
});
