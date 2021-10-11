import { Component, OnInit } from '@angular/core';
import { fournisseur } from "../Models/fournisseur";

@Component({
  selector: 'app-list-fournisseur-component',
  templateUrl: './list-fournisseur-component.component.html',
  styleUrls: ['./list-fournisseur-component.component.css']
})
export class ListFournisseurComponentComponent implements OnInit {
  List: fournisseur[];
  constructor() { }

  ngOnInit(): void {
    this.List = [
      { idFournisseur: 1, code: "1ABC4522", libelle: "hp" },
      { idFournisseur: 2, code: "2ABC4522", libelle: "dell" },
      { idFournisseur: 3, code: "3ABC4522", libelle: "lenovo" },
      { idFournisseur: 400, code: "40ABC452", libelle: "asus" }
    ]
  }

  getColor(fournisseur: fournisseur) {
    if (fournisseur.libelle == 'hp')
      return 'lightgreen'
    else
      return 'yellow'
  }

  getFont(fournisseur: fournisseur){
    if (fournisseur.code.startsWith('2A'))
      return 'bold'
    else
      return ''
  }

  delete(fournisseur:fournisseur){
    let i = this.List.indexOf(fournisseur);
    this.List.splice(i,1);
  }

  

}
