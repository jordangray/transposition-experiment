import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WordTestComponent } from './word-test.component';

describe('WordTestComponent', () => {
  let component: WordTestComponent;
  let fixture: ComponentFixture<WordTestComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WordTestComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WordTestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should transpose', () => {
    it('should transpose the first two characters', () => {
      const word = 'word';
      const transposed = component.transpose(word, 1);

      expect(transposed).toBe('owrd');
    });

    it('should transpose the middle two characters', () => {
      const word = 'word';
      const transposed = component.transpose(word, 2);

      expect(transposed).toBe('wrod');
    });

    it('should transpose the last two characters', () => {
      const word = 'word';
      const transposed = component.transpose(word, 3);

      expect(transposed).toBe('wodr');
    });
  })
});
