import { ComponentFixture, TestBed } from '@angular/core/testing';
import { VerLibrosPage } from './ver-libros.page';

describe('VerLibrosPage', () => {
  let component: VerLibrosPage;
  let fixture: ComponentFixture<VerLibrosPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(VerLibrosPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
