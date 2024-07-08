import { Component, OnInit } from '@angular/core';
import { SharedService } from '../../shared.service';


@Component({
  selector: 'app-stats',
  templateUrl: './stats.component.html',
  styleUrls: ['./stats.component.css'],
  standalone: true
})
export class StatsComponent implements OnInit {

  data: any[] = [];
  dev: number = 0
  ref: number = 0

  constructor(private sharedService: SharedService) {}

  ngOnInit() {
    this.sharedService.currentData.subscribe(data => this.data = data);
    // let array = JSON.parse(this.data)
    this.dev = this.data.filter(personne => personne.formation === 'Développeur web').length;
    this.ref = this.data.filter(personne => personne.formation === 'Référent digital').length;
        console.log(this.dev)
        console.log(this.ref)
  }

}
