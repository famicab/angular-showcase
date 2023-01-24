export interface Usuario{
    nombre: string;
    apellidos: string;
    empresa?:string;
    pais?:string;
    otroPais?:string;
    correoElectronico:string;
    genero?:string;
    usuario:string;
    clave:string;
    repetirClave:string;
    deseaRecibirNoticias:boolean;
}