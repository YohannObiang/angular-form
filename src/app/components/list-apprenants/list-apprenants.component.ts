import { Component, OnInit } from '@angular/core';
import { LocalStorageService } from '../../local-storage.service';
import {MatTableModule} from '@angular/material/table';
import { CardModule } from 'primeng/card';
import { ScrollPanelModule } from 'primeng/scrollpanel';
import { SharedService } from '../../shared.service';




export interface PeriodicElement {
  nom: string;
  prenom: string;
  formation: string;
}


@Component({
  selector: 'app-list-apprenants',
  templateUrl: './list-apprenants.component.html',
  styleUrls: ['./list-apprenants.component.css'],
  standalone: true,
  imports: [MatTableModule, CardModule, ScrollPanelModule],
})
export class ListApprenantsComponent {

  constructor(private localStorageService: LocalStorageService, private sharedService: SharedService) {}

  apprenants: PeriodicElement[] = []  
  
  ngOnInit() {
      this.sharedService.changeData(this.localStorageService.getItem('student'));
      this.apprenants = this.localStorageService.getItem('student').reverse()
      console.log(this.apprenants)
    }


  displayedColumns: string[] = ['nom', 'prenom', 'formation'];
  }


