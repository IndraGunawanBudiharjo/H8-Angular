import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';
// import { EventEmitter } from 'stream';

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.css']
})
export class ButtonComponent implements OnInit {
  
  constructor() { }
  @Input() name = '';
  @Output() counterEvent = new EventEmitter();
  
  onButtonClick() {
    this.counterEvent.emit()
  }

  ngOnInit(): void {
  }

}
