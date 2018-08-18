import {
  DataService
} from './../../services/data.service';
import {
  Component,
  OnInit
} from '@angular/core';
import {
  ActivatedRoute, Router
} from '../../../../node_modules/@angular/router';
import {
  Contact
} from '../../data/data.model';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html'
})
export class DetailComponent implements OnInit {

  contact: Contact;

  constructor(private activatedRoute: ActivatedRoute, private dataService: DataService,private _router:Router) {
    console.log(this.contact);
    this.activatedRoute.params.subscribe(param => {
      this.contact = this.dataService.findById(param['id']);
      if( !this.contact ){
        this._router.navigate(['/list']);
      }
    })
  }

  ngOnInit() {}

  getState() {
    return `${this.contact.address.state}, ${this.contact.address.zipCode}, ${this.contact.address.country}`;
  }

  mostarUsuario() {
    console.log(this.contact);
  }

}
