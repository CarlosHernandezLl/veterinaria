import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatListModule } from '@angular/material/list';
import { NavbarComponent } from '../navbar/navbar.component';

@NgModule({
  declarations: [
  ],
  imports: [
    CommonModule, MatToolbarModule, MatButtonModule, MatIconModule, MatSidenavModule, MatListModule
  ],
  exports: [MatToolbarModule, MatButtonModule, MatIconModule, MatSidenavModule, MatListModule]
})
export class SharedModule { }
