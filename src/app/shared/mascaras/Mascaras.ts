export class Mascaras {

   // Formato DD/MM/AAAA
   public static DATA = [/[1-9]/, /[1-9]/, '/', /[1-9]/, /[1-9]/, '/', /[1-9]/, /[1-9]/, /[1-9]/, /[1-9]/];
   // Formato HH:MM
   public static HORA = [/[0-2]/, /[1-9]/, ':', /[0-5]/, /[1-9]/];
   // Formato 99999-999
   public static CEP  = [ /\d/, /\d/, /\d/, /\d/, /\d/, '-', /\d/, /\d/, /\d/];
   // Formato 999.999.999-99
   public static CPF  = [/\d/, /\d/, /\d/, '.', /\d/, /\d/, /\d/, '.', /\d/, /\d/, /\d/, '-', /\d/, /\d/];
   // Formato 99.999.999/9999-99
   public static CNPJ = [/\d/, /\d/, '.', /\d/, /\d/, /\d/, '.', /\d/, /\d/, /\d/, '/', /\d/, /\d/, /\d/, /\d/, '-', /\d/, /\d/];
   // Formato (99) 9-9999-9999
   public static TELEFONE = ['(', /[1-9]/, /[1-9]/, ')', '9', '-', /[1-9]/, /[1-9]/, /[1-9]/, /[1-9]/, '-',  /[1-9]/, /[1-9]/, /[1-9]/, /[1-9]/]

   public static removerMascara(dadoMascarado) {
      return dadoMascarado ? dadoMascarado.replace(/\W/g, '') : '';
   }

}
