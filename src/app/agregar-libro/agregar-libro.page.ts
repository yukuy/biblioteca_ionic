import { Component } from '@angular/core';
import { SupabaseService } from '../supabase.service';

@Component({
  selector: 'app-agregar-libro',
  templateUrl: './agregar-libro.page.html',
  styleUrls: ['./agregar-libro.page.scss'],
})
export class AgregarLibroPage {
  nombre: string = '';
  year: number | null = null;
  isbn: string = '';
  editorial: string = '';
  mensaje: string = '';

  constructor(private supabaseService: SupabaseService) {}

  async agregarLibro() {
    const libro = {
      nombre: this.nombre,
      year: this.year || 0,
      isbn: this.isbn,
      editorial: this.editorial,
    };

    try {
      const data = await this.supabaseService.agregarLibro(libro);
      console.log('Libro agregado exitosamente:', data);
      this.mensaje = 'Libro agregado exitosamente';

      // Limpiar los campos después de agregar el libro
      this.nombre = '';
      this.year = null;
      this.isbn = '';
      this.editorial = '';
    } catch (error) {
      console.error('Error al agregar el libro:', error);
      this.mensaje = 'Error al agregar el libro';
    }
  }
}
