import { Component, Input, EventEmitter, Output } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-side-bar',
  templateUrl: './side-bar.component.html',
  styleUrls: ['./side-bar.component.scss']
})
export class SideBarComponent {
  @Output() onFileLoad = new EventEmitter();
  @Input() image!: string;
  @Input() scale!: FormControl<number | null>;
  @Input() animationType!: FormControl<string | null>;
  @Input() translate!: FormControl<string | null>;
  @Output() setAnimationParametr = new EventEmitter();
  @Output() triggerAnimation = new EventEmitter();
}
