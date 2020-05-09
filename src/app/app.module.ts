import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FadeEffectComponent } from './fade-effect/fade-effect.component';
import { MaterialModule } from './common.material';
import { FadeDialogComponent } from './fade-dialog/fade-dialog.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    AppComponent,
    FadeEffectComponent,
    FadeDialogComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
    FormsModule, ReactiveFormsModule
  ],
  providers: [],
    entryComponents:[
FadeDialogComponent],
  bootstrap: [AppComponent]
})
export class AppModule { }
