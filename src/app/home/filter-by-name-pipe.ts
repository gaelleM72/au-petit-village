import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filterByNamePipe'
})
export class FilterByNamePipePipe implements PipeTransform {

  transform(value: unknown, ...args: unknown[]): unknown {
    return null;
  }

}
