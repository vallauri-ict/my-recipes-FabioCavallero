import { Directive, HostBinding, HostListener, ElementRef } from '@angular/core';
@Directive({
  selector: '[appDropdown]'
})
export class DropdownDirective {
  //Host -> tag al quale si applica la direttiva
  //Collegamento tra host e booleana
  @HostBinding('class.open') isOpen:boolean=false;
  //Listener -> gestisce le azioni sull'host su cui è applicata la direttiva
  @HostListener('document:click',['$event']) toggleOpen(event:Event){
    //this.isOpen=!this.isOpen;
    this.isOpen= this.elRef.nativeElement.contains(event.target)?!this.isOpen:false;
  };
  constructor(private elRef:ElementRef) { }
}