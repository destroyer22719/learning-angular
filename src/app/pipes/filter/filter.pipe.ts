import { Pipe, PipeTransform } from '@angular/core';
import { IUser } from 'src/app/interfaces/user';

@Pipe({
  name: 'filter',
  pure: true
})
export class FilterPipe implements PipeTransform {

  transform(input: IUser[], filterIdType:string):IUser[] {
    if (filterIdType === ""){
      return input
    } else {
      return filterIdType ==='odd'? input.filter(user => user.id %2 !== 0) :input.filter(user => user.id %2 === 0) ;
    }
  }

}
