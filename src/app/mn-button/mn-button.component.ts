import { Component, Input, Output, EventEmitter,ViewEncapsulation } from '@angular/core';

export const MDL_BUTTON_STYLE = ['raised','flat','fab','mini-fab',''];
export const MDL_BUTTON_COLOR = ['primary','accent',''];

@Component({
    selector: 'mn-button',
    template: `<button
                [id]="id"
                (click)="doClick()"
                [disabled]="disabled"
                [hidden]="hidden"
                [title]="tooltip"
                [ngClass]="setClasses()">
                <span *ngIf="type != 'fab' && type != 'mini-fab'">{{title}}</span>
                <i *ngIf="type == 'fab' || type == 'mini-fab'" class="material-icons-plus">&#43;</i>
                </button>`,
    styleUrls: ['./mn-button.component.css']
    })
export class MnButtonComponent  {

    /**
     *Titolo
     */
    @Input("title")
    public title:string;

    /**
     * Tipo di bottone
     */
    @Input("type")
    public type: 'raised' | 'flat' | 'fab' | 'mini-fab' = 'flat';

    /**
     * Tipo di colore
     */
    @Input("colored")
    public colored: 'primary' | 'accent' | '' = '';

    /**
     * Id del bottone
     */
    @Input("id")
    public id:string;

    @Input("tooltip")
    public tooltip:string = "";

    /**
     * Event emitter legato a click del bottone
     */
    @Output()
    public onClick = new EventEmitter();

    /**
     * bottone disabilitato
     */
    @Input("disabled")
    public disabled:boolean = false;

    /**
     * Bottone nascosto
     */
    @Input("hidden")
    public hidden:boolean = false;


    public hide() {
        this.hidden = true;
    }

    public show() {
        this.hidden = false;
    }

    public disable() {
        this.disabled = true;
    }

    public enable() {
        this.disabled = false;
    }

    public isDisabled():boolean {
        return this.disabled;
    }

    public isHidden():boolean {
        return this.hidden;
    }

    public setClasses() {
        let cssClasses = {
                'mdl-button' : true,
                'mdl-js-button' : true,
                'mdl-button--raised': this.type === 'raised' ,
                'mdl-button--fab': this.type === 'fab' || this.type === 'mini-fab',
                'mdl-button--accent': this.colored ===  'accent',
                'mdl-button--primary': this.colored ===  'primary',
                'mdl-button--mini-fab': this.type === 'mini-fab'
        }
        return cssClasses;
      }


    /**
     * Esegue evento click
     */
    public doClick() {
        this.onClick.emit(this);
    }
}
