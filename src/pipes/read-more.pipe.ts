import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'readMore',
  standalone: true
})
export class ReadMorePipe implements PipeTransform {
  transform(value: string, showAll: boolean): string {
    if (!value) return '';
    if (showAll) return value;
    return value.length > 40 ? value.substring(0, 40) + '...' : value;
  }
}
