import { NgModule, DoBootstrap, Injector } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { createCustomElement } from '@angular/elements';

import { AppComponent } from './app.component';
import { UICounterComponent } from './uicounter/uicounter.component';

@NgModule({
  declarations: [
    AppComponent,
    UICounterComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent],
  entryComponents: [UICounterComponent]
})
export class AppModule implements DoBootstrap {
  constructor(private injector: Injector) {
    const webComponent = createCustomElement(UICounterComponent, {injector});
    customElements.define('ui-counter', webComponent);
  }

  ngDoBootstrap() {}
}
