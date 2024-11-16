import { Injectable } from '@angular/core';
import { createClient, SupabaseClient } from '@supabase/supabase-js';


  @Injectable({
    providedIn: 'root'
  })
  export class SupabaseService {
    private supabase: SupabaseClient;
  
    constructor() {
      this.supabase = createClient('https://abeaaemxaimrhrkscufh.supabase.co', 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImFiZWFhZW14YWltcmhya3NjdWZoIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MzE0NDA5MjksImV4cCI6MjA0NzAxNjkyOX0.2zSO2hFlIt0nHn35kMtM4vJcTu5RQHuQLy0uG7fYxhc');
    }

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
      return { data: [], mensaje: 'Error al cargar los libros' };  // Devuelve el mensaje y los datos
    }

    console.log('Libros obtenidos:', data);
    
    if (data && data.length > 0) {
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

