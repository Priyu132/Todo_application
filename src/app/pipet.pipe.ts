import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'pipet'
})
export class PipetPipe implements PipeTransform {

  transform(value: Number[], ...args: unknown[]): unknown {
    return value.sort();
  }

}
