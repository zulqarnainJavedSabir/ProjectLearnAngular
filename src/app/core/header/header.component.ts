import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { DataStorageService } from '../../shared/data-storage.service';
import { Recipe } from '../../recipes/recipe.model';
import { AuthService } from '../../auth/auth.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
@Output() featureSelected = new EventEmitter();
UserStatus = false;
userName = '';
constructor(private dataStorageService: DataStorageService,
  private authService: AuthService,
private router: Router) { }
  onSelect(feature: string) {
    this.featureSelected.emit(feature);
}

onSaveData() {
this.dataStorageService.storeRecipe().subscribe(
  (result) => console.log(result)
);
}
onFetchData() {
  this.dataStorageService.RetrieveRecipe();
}
  ngOnInit() {
    this.authService.AuthStatusChanged.subscribe(
      (useremail: string) => {
        if (useremail != null) {
          this.UserStatus = true;
          this.userName = useremail;
        } else {
          this.UserStatus = false;
        }
      }
    );
    // this.onFetchData();
  }
  onLogOut() {
    this.authService.signOutUser();
    this.router.navigate(['../signin']);
  }
}
