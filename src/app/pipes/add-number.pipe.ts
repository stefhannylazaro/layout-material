import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'addNumber'
})
export class AddNumberPipe implements PipeTransform {

  transform(value:number, num?:number): number {
    let i=isNaN(num)? 1: num;
    return value+i;
  }

}
