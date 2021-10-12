import { Directive, HostBinding, HostListener } from "@angular/core";

@Directive({
  selector: "[appMyDirective]"
})
export class MyDirectiveDirective {
  @HostBinding("style.color") color = "red";
  @HostBinding("style.cursor") cursor;

  constructor() {
    console.log("In Directive");
    this.color = "green";
  }

  @HostListener("mouseenter") mouseEnter() {
    console.log("Mouse Enter");
    this.color = "red";
    this.cursor = "pointer";
  }

  @HostListener("mouseleave") onMouseLeave() {
    console.log("Mouse Leave");
    this.color = "yellow";
  }
}
