import {Pipe, PipeTransform} from '@angular/core';

@Pipe({
  name: 'transformDate'
})
export class TransformDatePipe implements PipeTransform {

  transform(value: string): string {
    return value.slice(2, 10);
  }

}
