import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { debounceTime } from 'rxjs';
import { GiphyApiService } from 'src/app/service/giphy-api.service';
import { gifs } from 'src/app/types/giphyTypes';

@Component({
  selector: 'app-giphy',
  templateUrl: './giphy.component.html',
  styleUrls: ['./giphy.component.scss']
})
export class GiphyComponent implements OnInit{
  constructor(
    private formBuilder : FormBuilder,
    private GiphyApi : GiphyApiService
  ){
    this.initForm()
  }
  ngOnInit(): void {
    this.changesIn()
  }
  formIn !: FormGroup

  giphs : gifs[] = []
  private initForm(){
    this.formIn = this.formBuilder.group({
      search :['',Validators.required]
    })
  }

  get search(){
    return this.formIn.get('search')
  }

  changesIn(){
    this.search?.valueChanges.pipe(debounceTime(300)).subscribe(item => {
      console.log(item)
      this.GiphyApi.getGiphs(item).subscribe(item =>{
        console.log(item);
        this.giphs = item
      })
    })
  }
}
