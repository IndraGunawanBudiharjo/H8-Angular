import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { ButtonComponent } from './button/button.component';
import { AddNewItemComponent } from './add-new-item/add-new-item.component';
import { ParagraphComponent } from './paragraph/paragraph.component';
import { FileSizePipe } from './file-size.pipe';
import { CustomerDashboardModule } from './customer-dashboard/customer-dashboard.module';
import { NoEncapsulationComponent } from './view-encapsulation/no-encapsulation/no-encapsulation.component';
import { EmulatedEncapsulationComponent } from './view-encapsulation/emulated-encapsulation/emulated-encapsulation.component';
import { ShadowDomEncapsulationComponent } from './view-encapsulation/shadow-dom-encapsulation/shadow-dom-encapsulation.component';
import { LoginReactiveFormComponent } from './login-reactive-form/login-reactive-form.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    ButtonComponent,
    AddNewItemComponent,
    ParagraphComponent,
    FileSizePipe,
    NoEncapsulationComponent,
    EmulatedEncapsulationComponent,
    ShadowDomEncapsulationComponent,
    LoginReactiveFormComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    CustomerDashboardModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
