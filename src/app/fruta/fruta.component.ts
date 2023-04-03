import { Component } from "@angular/core";

@Component({
    selector:'fruta',
    templateUrl:'./fruta.component.html',
})

export class FrutaComponent {
   
    public nombre_componente= 'Componente de Fruta';
    public namlistado_fruta = 'naranja,manzana,pera,zandia';
    
    public nombre:string;
    public edad: number=12;
    public mayordeeada: boolean= true;
    public trabajos:Array<any>=['carpungtero', 'albañil',12];
    comondin:any 

//PRIMERO DE EJECUTA EL CONTRUCTOR LUEGO EN ngINIT

    constructor(){
        this.nombre='alex';
        this.edad=25;
        this.mayordeeada=false;
        this.comondin= 'SI'
        //dar un valor dentro del constructor a una variable es una buena practica
  

    }
  

//para llamar funciones y realizar funciones 
    ngOnInit(){
        this.cambiarnombre();
        this.cambiaredad(77);
        alert(this.nombre+' '+this.edad);    
        

        // Variables y alcance 

     var uno = 1;
     var dos = 2;

     if (uno==1 ) {
        //AQui la variable con tipo de dato let solo fi=uncionara dentro de la sentencia if
        let uno = 3;
        var dos= 88;
        //ejemplo del let con nombre uno y tambien del dos que en este caso es un var que se unsa a novel de todo el sistema
        console.log('Dentro del if '+ uno+ ' '+ dos )
     }
// ejemplo del var con nombre uno 
     console.log('FUera del if '+ uno+  ' ' + dos )
    }

    cambiarnombre(){
        this.nombre='alvaro'
    }

    cambiaredad(edad:any){
        this.edad=edad
    }
}


