import { Component } from '@angular/core';
import { InputTextModule } from 'primeng/inputtext';
import { FormsModule } from '@angular/forms';
import {NgForm} from '@angular/forms';
import { CardModule } from 'primeng/card';
import { ButtonModule } from 'primeng/button';
import { LocalStorageService } from '../../local-storage.service';

@Component({
  selector: 'app-formStudent',
  templateUrl: './formStudent.component.html',
  styleUrls: ['./formStudent.component.css'],
  imports: [FormsModule, InputTextModule, FormsModule, CardModule, ButtonModule],
  standalone: true
})
export class FormStudentComponent {

// J'initialise le services de localstorage
  constructor(private localStorageService: LocalStorageService) {}

// Je crée le tableau apprenants
  apprenants: {}[] = []  

// Je configure la fonction qui doit s'activer au chargement de la page
  ngOnInit() {

// J'ajoute une condition qui verifie s'il y a qlq chose a la clé "student" dans le LS.
// S'il y a qlq chose dans le LS alors j'attribue la valeur de cet element a mon tableau "apprenants"
    if (this.localStorageService.getItem('student').length > 0) {
      this.apprenants = this.localStorageService.getItem('student')
    }
// S'il n'y a rien alors je stocke le tableau "apprenant" (qui est vide) dans le LS
  else{
      this.localStorageService.setItem('student', this.apprenants);
    }
  }

// Je configure la fonction qui devra s'activer au moment de soummettre mon formulaire
   onSubmit(formulaire: NgForm): void {

// Je push l'objet "formulaire.value" contenant les donnees de mon formulaire dans le tableau "apprenants"
    this.apprenants.push(formulaire.value); 

// J'envoie la nouvelle valeur du tableau "apprenants dans le LS"
    this.localStorageService.setItem('student', this.apprenants);

// Je fais un console.log de ce qui ce trouve dans le LS a la clé "student" pour verifier que ca a marché
    console.log(this.localStorageService.getItem('student'))

// Je recharge ma page pour reinitialiser le formulaire
    location.reload()
  }
          
}
