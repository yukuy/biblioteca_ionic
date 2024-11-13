import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AgregarLibroPage } from './agregar-libro.page';

describe('AgregarLibroPage', () => {
  let component: AgregarLibroPage;
  let fixture: ComponentFixture<AgregarLibroPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(AgregarLibroPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
