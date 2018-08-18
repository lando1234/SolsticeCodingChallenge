import { Injectable } from '@angular/core';
import { Contact } from '../data/data.model';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { Observable } from '../../../node_modules/rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  contacts: Contact[]
  
  constructor(private http: HttpClient) {
  }


  getContacts(): Observable<Contact[]>{
    return this.http.get('https://s3.amazonaws.com/technical-challenge/v3/contacts.json').pipe(map( (params:Contact[]) => {this.contacts = params;
                                 return params;} ));
  }

  findById( id ){

    if( this.contacts ){
      return this.contacts.find( contact => contact.id === id );
    }
    return undefined;



  }


}