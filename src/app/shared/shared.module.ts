import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { GridTimePickerComponent } from './components/grid-time-picker/grid-time-picker.component';
import { SocialMediaMenuComponent } from './components/social-media-menu/social-media-menu.component';
import { RouterModule } from '@angular/router';
import { BreadcrumbNavComponent } from './components/breadcrumb-nav/breadcrumb-nav.component';



@NgModule({
  declarations: [GridTimePickerComponent, SocialMediaMenuComponent, BreadcrumbNavComponent],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule
  ],
  exports: [
    FormsModule,
    ReactiveFormsModule,
    RouterModule,
    GridTimePickerComponent,
    SocialMediaMenuComponent,
    BreadcrumbNavComponent
  ]
})
export class SharedModule { }
