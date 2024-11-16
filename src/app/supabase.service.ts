// Importa Injectable y otros elementos necesarios
import { Injectable } from '@angular/core';
import { createClient, SupabaseClient } from '@supabase/supabase-js';

@Injectable({
  providedIn: 'root'
})
export class SupabaseService {
  private supabase: SupabaseClient;

  constructor() {
    this.supabase = createClient(
      'https://abeaaemxaimrhrkscufh.supabase.co',
      'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImFiZWFhZW14YWltcmhya3NjdWZoIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MzE0NDA5MjksImV4cCI6MjA0NzAxNjkyOX0.2zSO2hFlIt0nHn35kMtM4vJcTu5RQHuQLy0uG7fYxhc'
    );
  }

  // Método de prueba de conexión
  async probarConexion() {
    try {
      const { data, error } = await this.supabase.from('libros').select('*').limit(1);
      
      if (error) {
        console.error('Error en la conexión a Supabase:', error);
        return { success: false, message: 'Error en la conexión a Supabase', error };
      }
      
      console.log('Conexión exitosa. Datos recibidos:', data);
      return { success: true, data };
    } catch (error) {
      console.error('Error en la prueba de conexión a Supabase:', error);
      return { success: false, error };
    }
  }

  // ... Métodos agregarLibro y obtenerLibros como ya los tienes definidos

  async agregarLibro(libro: { nombre: string; year: number; isbn: string; editorial: string }) {
    const { data, error } = await this.supabase
      .from('libros') // Nombre de la tabla en Supabase
      .insert([libro]);

    if (error) throw error;
    return data;
  }
 // Método para obtener libros de la base de datos
 async obtenerLibros() {
  try {
    const { data, error } = await this.supabase.from('libros').select('id, nombre, isbn, editorial, year');

    if (error) {
      console.error('Error al obtener la lista de libros desde Supabase:', JSON.stringify(error));
      return { data: [], mensaje: 'Error al cargar los libros' };
    }

    console.log('Respuesta completa:', { data, error });

    if (data && data.length > 0) {
      console.log('Libros obtenidos:', data);
      return { data, mensaje: '' };
    } else {
      console.log('No hay libros disponibles en la base de datos.');
      return { data: [], mensaje: 'No hay libros disponibles.' };
    }
  } catch (error) {
    console.error('Error en la conexión o en la consulta:', JSON.stringify(error));
    return { data: [], mensaje: 'Error al cargar los libros' };
  }
}

}

