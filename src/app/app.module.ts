import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';



import { ShoppingListService } from './Services/shopping-list.service';
import { AppRoutingModule } from './app-routing.module';
import { DataStorageService } from './shared/data-storage.service';

import { AuthService } from './auth/auth.service';
import { AuthGuard } from './auth/auth.guard';

import { RecipeService } from './Services/recipe.service';
import { SharedModule } from './shared/shared.module';
import { ShoppingListModule } from './shopping-list/shopping-list.module';
import { AuthModule } from './auth/auth.module';
import { CoreModule } from './core/core.module';
import { HttpClient } from 'selenium-webdriver/http';



@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClient,
    SharedModule,
    ShoppingListModule,
    AuthModule,
    CoreModule
  ],
  providers: [RecipeService,
     ShoppingListService,
     DataStorageService,
     AuthService,
    AuthGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }
