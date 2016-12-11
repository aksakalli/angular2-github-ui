import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'largeNumberShorten'
})
export class LargeNumberShortenPipe implements PipeTransform {

  transform(num: number, digits = 1): string {

    let units = ['k', 'M', 'G', 'T', 'P', 'E', 'Z', 'Y'];
    var decimal: number;

    for (var i = units.length - 1; i >= 0; i--) {
      decimal = Math.pow(1000, i + 1);

      if (num <= -decimal || num >= decimal) {
        let fixed = +(num / decimal).toFixed(digits);
        return `${fixed}${units[i]}`;
      }
    }

    return num.toString();
  }

}
