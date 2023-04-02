import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { DarkModeService } from 'src/app/service/dark-mode.service';
import { AuthService } from "../../../service/auth.service";
@Component({
  selector: 'app-cerrar-sesion',
  templateUrl: './cerrar-sesion.component.html',
  styleUrls: ['./cerrar-sesion.component.scss']
})
export class CerrarSesionComponent {
  
  constructor(
    private authservice : AuthService,
    private darkMode : DarkModeService
  ) {
    
  }
  truefal = false
  CerrarSsn(){
    this.authservice.logOut()
    this.darkMode.trueFal()
    
  }

  NoCerrarSsn(){
    this.darkMode.trueFal()

  }
  
}
