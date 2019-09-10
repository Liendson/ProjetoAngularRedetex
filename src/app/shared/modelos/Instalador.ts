import { Usuario } from './Usuario';

export class Instalador extends Usuario {
   // Tipo do Acesso do Usuário, define as permissões do sistema;
   public tpAcesso = 2;
   // Cargo do Usuário do sistema
   public cargo = 'Instalador';
}
