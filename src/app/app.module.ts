import { ProductService } from './product.service';
import { CategorieService } from './categorie.service';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { MatPaginatorModule } from '@angular/material/paginator';
import { FormsModule } from '@angular/forms';


import { AngularFireModule } from '@angular/fire';
import { AngularFireDatabaseModule } from '@angular/fire/database';
import { environment } from './../environments/environment';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { HeaderComponent } from './dashboard/header/header.component';
import { BodyComponent } from './dashboard/body/body.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ModifComponent } from './modif/modif.component';
import { HeaderModifComponent } from './modif/header-modif/header-modif.component';
import { BodyModifComponent } from './modif/body-modif/body-modif.component';
import { AnnonceComponent } from './annonce/annonce.component';
import { HeaderAnnonceComponent } from './annonce/header-annonce/header-annonce.component';
import { BodyAnnonceComponent } from './annonce/body-annonce/body-annonce.component';
import { NewproductComponent } from './newproduct/newproduct.component';
import { HeadernewproductComponent } from './newproduct/headernewproduct/headernewproduct.component';
import { BodynewproductComponent } from './newproduct/bodynewproduct/bodynewproduct.component';

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    HeaderComponent,
    BodyComponent,
    ModifComponent,
    HeaderModifComponent,
    BodyModifComponent,
    AnnonceComponent,
    HeaderAnnonceComponent,
    BodyAnnonceComponent,
    NewproductComponent,
    HeadernewproductComponent,
    BodynewproductComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    // CustomFormsModule,
    AppRoutingModule,    
    FontAwesomeModule, 
    BrowserAnimationsModule,
    MatPaginatorModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireDatabaseModule
  ],
  providers: [
    CategorieService,
    ProductService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
