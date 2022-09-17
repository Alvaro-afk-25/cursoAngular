import { Component } from "@angular/core";

@Component({
    selector:'fruta',
    templateUrl:'./fruta.component.html',
})

export class FrutaComponent {
   
    public nombre_componente= 'Componente de Fruta';
    public namlistado_fruta = 'naranja,manzana,pera,zandia';
}
