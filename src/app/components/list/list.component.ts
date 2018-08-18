import {
  DataService
} from './../../services/data.service';
import {
  Component,
  OnInit
} from '@angular/core';
import {
  Contact
} from '../../data/data.model';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html'
})
export class ListComponent implements OnInit {

  fav: Contact[]
  other: Contact[];
  constructor(private _dataService: DataService) {}

  ngOnInit() {

    if (this._dataService.contacts) {
      this.setLists(this._dataService.contacts);
    } else {
      this._dataService
        .getContacts()
        .subscribe(params => {
          this.setLists(params);
        });
    }
  }

  setLists(contacts: Contact[]) {
    this.fav = contacts.filter(contact => contact.isFavorite);
    this.other = contacts.filter(contact => !contact.isFavorite);
  }

}
