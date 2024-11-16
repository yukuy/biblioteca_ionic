import { Component, OnInit } from '@angular/core';
import { SupabaseService } from './supabase.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  //styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  constructor(private supabaseService: SupabaseService) {}

  async ngOnInit() {
    // Prueba la conexión al iniciar el componente
    const conexion = await this.supabaseService.probarConexion();
    if (conexion.success) {
      console.log('Conexión exitosa a Supabase.');
    } else {
      console.log('Error en la conexión:', conexion.message);
    }
  }
}
