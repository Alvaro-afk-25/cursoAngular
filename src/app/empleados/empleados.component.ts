import {Component} from '@angular/core';
import { empleado } from '../models/empleado';

@Component({
    selector:'empleados',
    templateUrl:'./empleados.component.html',
})

export class EmpleadosComponent{
    public emplea='andres,jorge,sebastian,etc';

//atributo de jscript se puede usar en el html del component
    public titulo='COmponentes de los empleados';

    //hacemos uso de un modelo creado en la carpeta model de empleado UNDEFINED esto es para que no se inicalize el tipo de dato emleado o en este caso el array
    public empleadoModel: empleado | undefined;

    // Usamos el <> para mostar el tipo de dato del que va a ser el array en este caso serian lo atributos de la clase empleado
    public trabajadores: Array<empleado>;
// usamos esta variable para ver las directivas del html 
    public trabajador_externo:boolean | undefined; 
// respetando lo de los metodos de orientar a objetos las variables se definen en el  contructor 
public color : string | undefined ;
   


constructor(){
        this.empleadoModel=new empleado('david lopez', 45, 'cocinero', false );
        //Vamos usar la directiva ngFOr para poder mistrar y manipular datos de este array dentro del html
        this.trabajadores =[
            new empleado('david lopez', 45, 'cocinero', true ),
            new empleado('alex lopez', 45, 'atunero', false ),
            new empleado('edi lopez', 45, 'programador', true )
        ]
        this.trabajador_externo= false;
        this.color='red';

    }

    ngOnInit(){
        
        console.log(this.empleadoModel)
        console.log(this.trabajadores)
    }

    // usamos aqui esta funcion para cambiar el valor de la propidad trabajador externo
    cambiarExterno(valor:boolean){
        this.trabajador_externo = valor;
    }

} 