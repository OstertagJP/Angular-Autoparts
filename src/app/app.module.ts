import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AutopartsListComponent } from './autoparts-list/autoparts-list.component';
import { FormsModule } from '@angular/forms';
import { AutopartsAboutComponent } from './autoparts-about/autoparts-about.component';
import { AutopartsGeneralComponent } from './autoparts-general/autoparts-general.component';
import { AutopartsCartComponent } from './autoparts-cart/autoparts-cart.component';
import { InputIntegerComponent } from './input-integer/input-integer.component';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    AutopartsListComponent,
    AutopartsAboutComponent,
    AutopartsGeneralComponent,
    AutopartsCartComponent,
    InputIntegerComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
  ],
  providers: [
    provideClientHydration()
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
