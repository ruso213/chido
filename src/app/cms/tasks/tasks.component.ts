import { Component, EventEmitter } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { GenericHTMLFormElement } from 'axios';

@Component({
  selector: 'app-tasks',
  templateUrl: './tasks.component.html',
  styleUrls: ['./tasks.component.scss']
})
export class TasksComponent {

  inputPrin = new FormControl
  favorites = []
  preferenceVideoGames = [
    {name: 'elden ring' , value : 'elden_ring'},
    {name: 'dark souls 1' , value : 'dark_souls_1'},
    {name: 'dark souls 2' , value : 'dark_souls_2'},
    {name: 'dark souls 3' , value : 'dark_souls_3'},
    {name: 'demon souls' , value : 'demon_souls'},
  ]
  
  form = new FormGroup({
    name : new FormControl(''),
    password: new FormControl(''),
    nameTAG: new FormControl(''),
  })
  getALL(){
    console.log(this.form.value);
    
  }



  optionchanges( valor: Event ){
    const  {target}  = valor 
    console.log(target);
    
  }
}
