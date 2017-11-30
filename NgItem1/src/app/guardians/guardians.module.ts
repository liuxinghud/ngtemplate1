import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GuardiansRoutingModule } from './guardians-routing-module';
import { ParentsListComponent } from './parents-list/parents-list.component';
import { DailyWorksComponent } from './daily-works/daily-works.component';
import { EditWorksComponent } from './edit-works/edit-works.component';
import { SummaryComponent } from './summary/summary.component';
import { RouterModule } from '@angular/router';

@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    GuardiansRoutingModule
  ],
  declarations: [
    ParentsListComponent, 
    DailyWorksComponent, 
    EditWorksComponent, 
    SummaryComponent]
})
export class GuardiansModule { }
