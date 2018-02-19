import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ArchivedTodosPage } from './archived-todos';
import { HttpClient, HttpHeaders} from '@angular/common/http';

@NgModule({
  declarations: [
    ArchivedTodosPage,
  ],
  imports: [
    IonicPageModule.forChild(ArchivedTodosPage),
  ],
})
export class ArchivedTodosPageModule {}
