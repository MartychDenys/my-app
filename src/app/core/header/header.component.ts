import { Component } from '@angular/core';
import { Response } from '@angular/http';
import {DataStorageService} from "../../shared/data-storage.service";
import {AuthService} from "../../auth/auth.service";

@Component({
  moduleId: module.id,
  selector: 'app-header',
  templateUrl: 'header.component.html',
  styleUrls: ['header.component.css']
})

export class HeaderComponent{
constructor(private dataStorageService: DataStorageService, private authService: AuthService){}

  onSaveRecipes(){
    this.dataStorageService.storeRecipe()
      .subscribe(
        (response: Response) => {
          console.log(response);
        },
        (error) => {
          console.log(error);
        }
      );
  }

  onFetchData(){
    this.dataStorageService.getRecipes();
  }

  onLogout(){
    this.authService.logout();
  }


}
