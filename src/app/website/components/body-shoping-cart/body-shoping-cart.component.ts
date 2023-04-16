import { Component } from '@angular/core';
import { Productos } from 'src/app/types/tipos';


@Component({
  selector: 'app-body-shoping-cart',
  templateUrl: './body-shoping-cart.component.html',
  styleUrls: ['./body-shoping-cart.component.scss']
})
export class BodyShopingCartComponent {
  constructor(){}
  producto : Productos= {
    title: '',
      price:0,
      description:'',
      images:[`../../../assets/d4a14705-6284-418c-a1f3-1ba753a0d28e.jpg`],
      category: {
        id:0,
        name: '',
        image: '',
        creationAt:'' ,
        updatedAt: '',
      },
      id: 0,
      creationAt: '',
      updatedAt: '',
  }
  objetoEmitter(item: Productos){
    this.producto = item
  }
}
