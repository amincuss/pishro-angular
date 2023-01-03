// Angular imports
import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
// Local imports
import { CustomerListComponent } from './Customer-List/Customer-List.component';
import { CustomerSaveModeComponent } from './Customer-Save-Mode/Customer-Save-Mode.component';
import { DashboardComponent } from './Dashboard/Dashboard.component';
import { InvoiceListComponent } from './Invoice-List/Invoice-List.component';
export const specialRoutes : Routes = [
  { path: '**', component: InvoiceListComponent},    //full path will be: '/specials/today'
  { path: 'customerlist', component: CustomerListComponent} //full path will be: will match '/specials/last'
];
const routes: Routes = [
  

  {path: '**', redirectTo: 'dashboard' , pathMatch: 'full'},
 
     {path: 'dashboard', component: DashboardComponent, children:specialRoutes}





];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
