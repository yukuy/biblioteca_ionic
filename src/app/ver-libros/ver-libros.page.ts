// src/app/ver-libros/ver-libros.page.ts
import { Component, OnInit } from '@angular/core';
import { SupabaseService } from '../supabase.service';

@Component({
  selector: 'app-ver-libros',
  templateUrl: './ver-libros.page.html',
  styleUrls: ['./ver-libros.page.scss']
})

export class VerLibrosPage implements OnInit {
  libros: any[] = [];
  mensaje: string = '';

  constructor(private supabaseService: SupabaseService) {}

  async ngOnInit() {
    try {
      const { data, mensaje } = await this.supabaseService.obtenerLibros();
      this.libros = data;
      this.mensaje = mensaje;
    } catch (error) {
      console.error('Error al obtener la lista de libros:', JSON.stringify(error));
      this.mensaje = 'Error al cargar los libros';
    }
  }
}

