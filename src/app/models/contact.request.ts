export interface ContactRequest {}


export class ContactRequest {
  NombreCompleto!: string;
  Correo!: string;
  asunto!: string;
  mensaje!: string;
}
