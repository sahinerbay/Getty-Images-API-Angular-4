import { Injectable } from '@angular/core';

@Injectable()
export class HelpersService {

  constructor() { }

  setMediaTypeOption(currentMediaType: string, mediaTypeRoute: string):string {
    let reg = '(image|event)';
    let regExp = new RegExp(reg, "g");
    if (regExp.test(mediaTypeRoute)) {
      return currentMediaType = 'images';
    } else return currentMediaType = 'videos';
  }

}
