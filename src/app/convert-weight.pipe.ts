import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'convertWeight'
})
export class ConvertWeightPipe implements PipeTransform {

  transform(value: number, ...args: string[]): number {
    switch (args[0]){
      case "kg":
        return value/1000;
      case "t":
        return (value/1000)/1000;   
      default:
        return value
    }
  }

}
