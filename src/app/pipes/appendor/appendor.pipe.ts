import { Pipe, PipeTransform, Input } from '@angular/core';

@Pipe({
  name: 'appendor'
})
export class AppendorPipe implements PipeTransform {

  transform(input: string, position:string, textToAppend:string):string {
    return input = position === 'pre' ? textToAppend + input : input + textToAppend;

  }

}
