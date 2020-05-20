import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'wordCounter'
})
export class WordCounterPipe implements PipeTransform {

  transform(value: string): number {
    return value.split(/\s+/).length;
  }

}
