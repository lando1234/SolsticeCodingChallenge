import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'phone'
})
export class PhonePipe implements PipeTransform {

  transform(value: string, args?: any): any {
    
    const values = value.split("-");

    return `(${ values[0] }) ${values[1]}-${values[2]}`;
  }

}
