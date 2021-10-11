import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-fournisseur-component',
  templateUrl: './fournisseur-component.component.html',
  styleUrls: ['./fournisseur-component.component.css']
})
export class FournisseurComponentComponent implements OnInit {

  idFournisseur :number = 105;
  code: string = 'A104B89';
  libelle:string = 'MyTeck';
  hide: boolean = false ;

  constructor() { }

  ngOnInit(): void {
  }
  hide_inf(){
    this.hide = true ;
    console.log(this.hide);
  }

}
