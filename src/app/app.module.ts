import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import {MatFormFieldModule} from '@angular/material/form-field';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatInputModule, MatButtonModule, 
  MatTableModule, MatIconModule} from '@angular/material';
import {MatSelectModule} from '@angular/material/select';
import { AnimalComponent } from './Cadastro/animal/animal.component';
import { VacinaComponent } from './Cadastro/vacina/vacina.component';

@NgModule({
  declarations: [
    AppComponent,
    AnimalComponent,
    VacinaComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    MatFormFieldModule,
    BrowserAnimationsModule,
    MatInputModule,
    MatButtonModule,
    MatTableModule, 
    MatIconModule,
    MatSelectModule
  ],
  providers: [HttpClient],
  bootstrap: [AppComponent]
})
export class AppModule { }
