export class Util{
    static cambiarFormatoDeFecha(fecha:string){

       return  fecha.replace(/(\d{2})\/(\d{2})\/(\d{4})/, '$3-$2-$1')

    }
}