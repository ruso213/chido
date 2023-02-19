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
    title: `Item`,
    images:[`../../../assets/d4a14705-6284-418c-a1f3-1ba753a0d28e.jpg`],
    category:{
      id: 0,
      name: ``,
      typeImg: ``
    },
    id : '-1',
    price: 0,
    description:`IDK`

  }
  objetoEmitter(item: Productos){
    this.producto = item
  }
}
