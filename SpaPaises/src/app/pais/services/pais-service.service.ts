import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { CountrySearchResponse } from '../interfaces/searchResponseInterface';

@Injectable({
  providedIn: 'root'
})
export class PaisService {
  private url: string = 'https://restcountries.com/v3.1/name/';
  results: CountrySearchResponse [] = [];

  //https://restcountries.com/v3.1/name/{name}
  //https://restcountries.com/#api-endpoints-v3-name 

  constructor(private http:HttpClient) {
  }

  get countries():CountrySearchResponse []{
    return [...this.results]; 
  }

  searchCountry(country : string){
    let countryToSearch = this.url + country;

     this.http.get<CountrySearchResponse []>(countryToSearch)
    //  .subscribe((resp) => {
    //   console.log(resp);
    //   this.results = resp;
    //  });
     .subscribe({
      next: (resp) =>{
          this.results = resp;
      },
      error: (err) =>{
        this.results = err;
      }
  })

    }
}
