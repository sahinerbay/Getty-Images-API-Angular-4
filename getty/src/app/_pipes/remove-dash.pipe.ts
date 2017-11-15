import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'removeDash'
})
export class RemoveDashPipe implements PipeTransform {

  transform(value: any, args?: any): any {
    let resultArray = [];
    for(let item of value) {
      let noDashItem = item.replace(/_/g, ' ');
      resultArray.push(noDashItem);
    }
    return resultArray;
    
  }

}
