import { Component, OnInit,ViewContainerRef,ViewChild,
  ComponentFactory,ComponentRef, ComponentFactoryResolver } from '@angular/core';


@Component({
  selector: 'mn-dyn-container',
  template: `<ng-template #dynContainer></ng-template>`
})
export class MnDynamicContainerComponent implements OnInit {

  @ViewChild("dynContainer", { read: ViewContainerRef }) container;

  componentRef: ComponentRef<any>;

  constructor(private resolver: ComponentFactoryResolver) { }

  ngOnInit() {
  }

  ngOnDestroy() {
   this.componentRef.destroy();
  }

  append(component:any) {
    //delete preview component
    this.container.clear();

    //takes a component and returns the recipe for how to create a component.
    const factory: ComponentFactory<any> = this.resolver.resolveComponentFactory(component.constructor);
    //call the create() method from the factory and
    //will append the component as a sibling to our container
    this.componentRef = this.container.createComponent(factory);

    //setup component ref
    component.setUpCmpRef(this.componentRef);


  }


}
