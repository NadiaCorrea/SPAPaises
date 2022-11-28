
import { Component, OnInit } from '@angular/core';
import { CountrySearchResponse } from '../../interfaces/searchResponseInterface';
import { PaisService } from '../../services/pais-service.service';

@Component({
  selector: 'app-por-pais',
  templateUrl: './por-pais.component.html'
})
export class PorPaisComponent implements OnInit {
  //creamos la propiedad para poder usar el ngModel
  query:string ='';
  // countries : CountrySearchResponse [] = [];

  constructor(private paisService : PaisService) { }

  ngOnInit(): void {
  }

  get countries (){
    return this.paisService.countries;
  }
 
  search(){
    this.paisService.searchCountry(this.query);
  }
}
