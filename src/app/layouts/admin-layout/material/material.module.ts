import { NgModule } from '@angular/core';
import{MatButtonModule,
MatDialogModule,
MatTabsModule,

} from '@angular/material'

import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';
import {MatCardModule} from '@angular/material';

import {MatProgressBarModule} from '@angular/material/progress-bar';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';



const MaterialComponents=[
  MatButtonModule,
  MatDialogModule,
  MatProgressSpinnerModule,
  MatCardModule,
  MatProgressBarModule,
  MatInputModule,
  MatFormFieldModule,
  MatTabsModule,
  
]
@NgModule({
  imports: [MaterialComponents],
  exports: [MaterialComponents]
})
export class MaterialModule { }
