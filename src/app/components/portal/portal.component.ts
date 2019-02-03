import {Component, AfterViewInit, TemplateRef, ViewChild, ViewContainerRef} from '@angular/core';
import {ComponentPortal, Portal, TemplatePortal} from '@angular/cdk/portal';

@Component({
  selector: 'app-portal',
  templateUrl: 'portal.component.html',
  styleUrls: ['portal.component.css'],
})
export class PortalComponent implements AfterViewInit {
  @ViewChild('templatePortalContent') templatePortalContent: TemplateRef<any>;
  selectedPortal: Portal<any>;
  componentPortal: ComponentPortal<AppExampleComponent>;
  templatePortal: TemplatePortal<any>;

  constructor(private _viewContainerRef: ViewContainerRef) {}

  ngAfterViewInit() {
    this.componentPortal = new ComponentPortal(AppExampleComponent);
    this.templatePortal = new TemplatePortal(this.templatePortalContent, this._viewContainerRef);
  }
}

@Component({
  selector: 'app-example-portal-component',
  template: '<div>Hello, this is a component portal</div>',
  styleUrls: ['appexample.component.css']
})
export class AppExampleComponent {}

