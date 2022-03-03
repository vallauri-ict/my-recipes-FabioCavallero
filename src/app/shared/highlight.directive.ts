import { Directive, HostBinding, HostListener, Input, OnInit } from '@angular/core';

@Directive({
  selector: '[appHighlight]'
})
export class HighlightDirective implements OnInit {
  @Input('appHighlight') hoverColor: any = 'Cyan';
  @Input() defaultColor: string = 'LightCyan';
  @HostBinding('style.backgroundColor') backgroundColor: string = this.defaultColor;
  @HostListener('mouseenter') evidenzia() {
    // console.log('mouseenter: ' + this.hoverColor);
    // così funziona sia usando appHighlight che [appHighlight]
    this.backgroundColor = this.hoverColor ? this.hoverColor : 'Cyan';
  }
  @HostListener('mouseleave') rilascia() {
    // console.log('mouseleave: ' + this.defaultColor);
    this.backgroundColor = this.defaultColor;
  }

  constructor() { }

  ngOnInit() {
    this.backgroundColor = this.defaultColor;
  }
}
