import { Pipe, PipeTransform } from "@angular/core";

@Pipe({
  name: "myPipe"
})
export class MyPipePipe implements PipeTransform {
  transform(value: string, ...args: any[]): any {
    console.log(value);
    console.log(args);
    let result = "";
    for (let i = 0; i < value.length; i++) {
      if (i % 2) {
        result += value[i].toLowerCase();
      } else {
        result += value[i].toUpperCase();
      }
    }
    return result;
  }
}
