import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PortalModule } from '@angular/cdk/portal';
import { AppComponent } from './app.component';
import { PortalComponent, AppExampleComponent } from './components/portal/portal.component';

@NgModule({
  declarations: [
    AppComponent,
    PortalComponent,
    AppExampleComponent
  ],
  imports: [
    BrowserModule,
    CommonModule,
    PortalModule
  ],
  providers: [],
  bootstrap: [AppComponent],
  entryComponents: [AppExampleComponent]
})
export class AppModule { }
