import { Component, OnInit, Output, EventEmitter } from '@angular/core';
// import { EventEmitter } from 'stream';

@Component({
  selector: 'app-add-new-item',
  templateUrl: './add-new-item.component.html',
  styleUrls: ['./add-new-item.component.css']
})
export class AddNewItemComponent implements OnInit {

  @Output() newItemEvent = new EventEmitter<string>();
  @Output() deleteItemEvent = new EventEmitter();


  constructor() { }

  ngOnInit(): void {
  }

  addNewItem(value: string) {
    this.newItemEvent.emit(value);
  }

  deleteItem(){
    this.deleteItemEvent.emit();
  }
}
