import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http'
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import {MatGridListModule} from '@angular/material/grid-list';

import { AppComponent } from './app.component';
import { JustTestComponent } from './JustTest/JustTest.component';
import { XEffectGridComponent } from './XEffectGrid/XEffectGrid.component';

@NgModule({
   declarations: [	
      AppComponent,
      JustTestComponent,
      XEffectGridComponent
   ],
   imports: [
      BrowserModule,
      HttpClientModule,
      NoopAnimationsModule,
      MatGridListModule
   ],
   providers: [],
   bootstrap: [
      AppComponent
   ]
})
export class AppModule { }
