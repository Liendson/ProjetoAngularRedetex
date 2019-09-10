import { Usuario } from './Usuario';

export class Vendedor extends Usuario {

   // Tipo do Acesso do Usuário, define as permissões do sistema;
   public tpAcesso = 1;
   // Cargo do Usuário do sistema
   public cargo = 'Vendedor';
}
