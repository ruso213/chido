import { Component, OnInit } from '@angular/core';
import { DarkModeService } from 'src/app/service/dark-mode.service';

@Component({
  selector: 'app-nice-button',
  templateUrl: './nice-button.component.html',
  styleUrls: ['./nice-button.component.scss']
})
export class NiceButtonComponent implements OnInit {
  toggleMoon=false
  constructor(
    private darkmode: DarkModeService
  ){}
  ngOnInit(): void {
    this.darkmode.darkMode$.subscribe(item => this.toggleMoon = item)
  }
  
}
