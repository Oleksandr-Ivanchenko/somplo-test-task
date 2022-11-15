import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})

export class AppComponent {
  title = 'my-app';
  image = '';
  public translate = new FormControl('translateX(100%)');
  public animationType = new FormControl('');
  scale = new FormControl(1.2);
  animationParametr: string = '';


  constructor() { }

  onFileLoad(event: Event) {
    const target = event.target as HTMLInputElement;
    const file: File = (target.files as FileList)[0];
    this.image = window.URL.createObjectURL(file);
    this.animationType.enable();
  }

  setAnimationParametr() {
    this.animationParametr = this.animationType.value || '';
  }

  triggerAnimation() {
    this.animationParametr = '';
    setTimeout(() => {
      this.animationParametr = this.animationType.value || '';
    }, 100)
  }

  ngOnInit () {
    this.animationType.disable();
  }
}
