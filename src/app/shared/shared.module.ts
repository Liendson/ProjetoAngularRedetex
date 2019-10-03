import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { DataTablesModule } from 'angular-datatables';

const sharedModules = [
   CommonModule,
   RouterModule,
   HttpClientModule,
   ReactiveFormsModule,
   FormsModule,
   DataTablesModule
];

@NgModule({
   imports: sharedModules,
   exports: sharedModules
})
export class SharedModule { }
