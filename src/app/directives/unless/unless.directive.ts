import { Directive, Input, TemplateRef, ViewContainerRef } from '@angular/core';

@Directive({
  selector: '[appUnless]'
})
export class UnlessDirective {
  @Input() set appUnless(condition){
    condition ? this.vcRef.clear() :this.vcRef.createEmbeddedView(this.templateRef)
  }
  constructor(
    private templateRef:TemplateRef<any>,
    private vcRef:ViewContainerRef
  ) { }

}
