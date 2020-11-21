import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { DataTablesModule } from 'angular-datatables';
import { TextMaskModule } from 'angular2-text-mask';
import { MyDatePickerModule } from 'mydatepicker';

const sharedModules = [
   CommonModule,
   RouterModule,
   HttpClientModule,
   ReactiveFormsModule,
   FormsModule,
   DataTablesModule,
   TextMaskModule,
   MyDatePickerModule
];

@NgModule({
   imports: sharedModules,
   exports: sharedModules
})
export class SharedModule { }
