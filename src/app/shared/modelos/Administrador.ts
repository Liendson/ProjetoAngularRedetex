import { Usuario } from './Usuario';

export class Administrador extends Usuario {
   // Tipo do Acesso do Usuário, define as permissões do sistema;
   public tpAcesso = 0;
   // Cargo do Usuário do sistema
   public cargo = 'Administrador';
}
