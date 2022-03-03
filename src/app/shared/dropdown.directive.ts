import { Directive, ElementRef, HostBinding, HostListener } from '@angular/core';

@Directive({
  selector: '[appDropdown]'
})
export class DropdownDirective {
  //HOST è il tag al quale si applica la direttiva
  //creo il collegamento tra host e booleana
  @HostBinding('class.open') isOpen: boolean = false;
  //LISTENER gestisce le azioni sull'HOST su cui è applicata la direttiva
  @HostListener('document:click', ['$event']) toggleOpen(event: Event) {
    // this.isOpen =! this.isOpen;
    this.isOpen = this.elRef.nativeElement.contains(event.target) ? !this.isOpen : false;
  }

  constructor(private elRef: ElementRef) { }
}
