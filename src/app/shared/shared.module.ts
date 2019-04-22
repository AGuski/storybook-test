import { NgModule } from '@angular/core';
import { BannerComponent } from './banner.component';
import { BrowserModule } from '@angular/platform-browser';

@NgModule({
  declarations: [
    BannerComponent
  ],
  imports: [
    BrowserModule
  ],
  exports: [
    BannerComponent
  ]
})
export class SharedModule { }
