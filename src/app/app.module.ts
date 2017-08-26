import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ShowcaseModule } from './showcase/showcase.module';
import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    ShowcaseModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
