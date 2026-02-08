import { Component } from '@angular/core'; //es el cerebro, y define que es una clase de angular
import { ContactService } from '../../services/service.contact';//Es el mensajero, lleva los datos al servidor de backend
import { ContactRequest } from '../../models/contact.request';//Es el molde, dice  que datos debe llevar el mensaje 
import { FormsModule } from '@angular/forms';//Permite usar el tunel de los datos 
import { CommonModule } from '@angular/common';//permite usar la logica del html como ir o for

@Component({
  selector: 'app-contact',
  standalone: true, 
  imports: [FormsModule, CommonModule],
  templateUrl: './contact.html', 
})
export class ContactComponent {

  contactData: ContactRequest = {                            
    NombreCompleto: "",
    Correo: "fabian.and96@gmail.com",
    asunto: "",
    mensaje: ""
  };

  mensajeOk: string = '';
  mensajeError: string = '';

  constructor(private contactService: ContactService) {}

  send() {
    this.contactService.sendMessage(this.contactData)
      .subscribe({
        next: () => {
          console.log('¡Éxito! El backend recibió el mensaje');
          this.mensajeOk = 'Mensaje enviado correctamente. Gracias por contactarme.';
          this.mensajeError = '';
        },
        error: err => {
          console.error('Error al conectar con el servidor:', err);
          this.mensajeError = 'No se pudo enviar el mensaje. Intenta más tarde.';
          this.mensajeOk = '';
        }
      });
  }
}