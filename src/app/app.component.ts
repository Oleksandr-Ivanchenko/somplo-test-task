import { Component } from '@angular/core';
import { Animations } from './animations';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  animations: [Animations],
})

export class AppComponent {
  title = 'my-app';
  image = '';
  public translate: string = 'translateX';
  public startPosition: string = '-100%';
  public animationType: string = '';
  name = new FormControl('');

  constructor() { }

  onFileLoad(event: any) {
    this.image = window.URL.createObjectURL(event.target.files[0])
  }

  setStartPosition(target: EventTarget | null) {
    const value = (<HTMLInputElement>target).value;
    switch (value) {
      case 'top':
        this.translate = 'translateY';
        this.startPosition = '-100%';
        break;
      case 'bottom':
        this.translate = 'translateY';
        this.startPosition = '100%';
        break;
      case 'left':
        this.translate = 'translateX';
        this.startPosition = '-100%';
        break;
      case 'right':
        this.translate = 'translateX';
        this.startPosition = '100%';
        break;
    }

    const animation = this.animationType;
    this.animationType = '';
    this.animationType = animation;
    console.log(this.animationType);
    // setTimeout(() => {
    //   this.animationType = '';
    // }, 1000)
  }

  setAnimationType(target: EventTarget | null) {
    this.animationType = (<HTMLInputElement>target).value;
    // setTimeout(() => {
    //   this.animationType = '';
    // }, 1000)
  }
}
