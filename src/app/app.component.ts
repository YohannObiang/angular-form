import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { FormStudentComponent } from "./components/formStudent/formStudent.component";
import { ListApprenantsComponent } from "./components/list-apprenants/list-apprenants.component";
import { Menubar } from './components/menubar/menubar.component';
import { StatsComponent } from './components/stats/stats.component';




@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, FormsModule, Menubar, FormStudentComponent, ListApprenantsComponent, StatsComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'angu-form';

}


