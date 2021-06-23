import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { ConvertPipe } from './convert.pipe';
import { ConvertWeightPipe } from './convert-weight.pipe';

@NgModule({
  declarations: [
    AppComponent,
    ConvertPipe,
    ConvertWeightPipe
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
