export class empleado {

    /*
    public nombre : string;
    public edad: number ;

    // aqui comparamos lo que nos va ha estar resibiendo cunado queramos usar esta clase 
    constructor (nombre ,edad){

        this.nombre = nombre;
        this.edad= edad;
    }*/

    //Aqui optimizamos codigo llamando directamente desde el el contructor lo que queremos \

    
    constructor(public nombre: string,
        public edad: number,
        public cargo: string,
        public contrato: boolean) {
    }

}



