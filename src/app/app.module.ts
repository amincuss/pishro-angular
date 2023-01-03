// Angular imports
import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {HttpClientModule} from '@angular/common/http';
import {ReactiveFormsModule} from '@angular/forms';
// PrimeNG imports
import {TableModule} from 'primeng/table';
import {CardModule} from 'primeng/card';
import {ButtonModule} from 'primeng/button';
import {RippleModule} from 'primeng/ripple';
import {ToastModule} from 'primeng/toast';
import {ToolbarModule} from 'primeng/toolbar';
import {MessageService} from 'primeng/api';
import {DialogModule} from 'primeng/dialog';
import {InputTextModule} from 'primeng/inputtext';
import {DialogService, DynamicDialogModule} from 'primeng/dynamicdialog';
import {AccordionModule} from 'primeng/accordion';
import {PanelModule} from 'primeng/panel';
// Local imports
import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import { CustomerListComponent } from './Customer-List/Customer-List.component';
import { CustomerSaveModeComponent } from './Customer-Save-Mode/Customer-Save-Mode.component';
import { CustomerModalComponent } from './Customer-modal/Customer-modal.component';
import { DashboardComponent } from './Dashboard/Dashboard.component';
import { InvoiceListComponent } from './Invoice-List/Invoice-List.component';
import { InvoiceModalComponent } from './Invoice-Modal/Invoice-Modal.component';


@NgModule({
  declarations: [								
    AppComponent
,    // Country components
      CustomerListComponent,
      CustomerSaveModeComponent,
      CustomerModalComponent,
      DashboardComponent,
      InvoiceListComponent,
      InvoiceModalComponent
   ],
  imports: [
    // Config
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
    // PrimeNg modules
    TableModule,
    CardModule,
    ButtonModule,
    RippleModule,
    ToastModule,
    DialogModule,
    ToolbarModule,
    InputTextModule,
    DynamicDialogModule,
    AccordionModule,
    PanelModule
  ],
  providers: [MessageService, DialogService],
  bootstrap: [AppComponent]
})
export class AppModule {
}
