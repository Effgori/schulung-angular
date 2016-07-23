import { Pipe, PipeTransform } from '@angular/core';

@Pipe({name: 'halloWelt'})
export class HalloWeltPipe implements PipeTransform {
  transform(value: string): string {
    return `Hallo ${value}!`;
  }
}