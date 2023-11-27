import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'sufixo'
})
export class SufixoPipe implements PipeTransform {

  transform(value: any, suffix: string): unknown {
    return `${value} ${suffix}`;;
  }

}
