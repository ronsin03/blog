import { Pipe, PipeTransform } from '@angular/core';
import * as marked from 'marked';

@Pipe({
  name: 'mdToHTML'
})
export class MdToHTMLPipe implements PipeTransform {

  transform(value: any, ...args: any[]): any {
    return marked(value);
  }

}
