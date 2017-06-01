import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'truncate',
  pure: true,
})
export class TruncatePipe implements PipeTransform {

  transform(value: string, length: number = 15, dots:boolean = false): any {
    let subst = value.substring(0,length);
    return dots ? `${subst}...`:subst;
  }

}
