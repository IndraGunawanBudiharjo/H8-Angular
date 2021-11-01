import { Component, ViewEncapsulation } from '@angular/core';
import { NgForm } from '@angular/forms'
import { Task } from './models/tasks';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  // encapsulation: ViewEncapsulation.None
})

export class AppComponent {

  
  categories: string[] = [
    'Shopping', 
    'Work',
    'Education',
    'Financing'
  ];

  tasks: Task[] = [];

  // title: string = 'my-app';
  // parentMessage: string = "Halo";
  // parentIncrease: string = "tambah";
  // parentDecrease: string = "kurang";
  // parentReset: string = "reset";
  // count: number = 0;

  // items: string[] = ['sepatu', 'sendal', 'tas'];
  // message: string = '';
  // messages: string[] = [
  //   "I can see you",
  //   "You cannot se me anymore",
  //   "Now you see me",
  //   "Now you dont't"
  // ];

  // currentDate = new Date();

  // people: any[] = [
  //   {
  //     name: "Rudi",
  //     age: 18,
  //     country: "Mars"
  //   }, 
  //   {
  //     name: "Budi",
  //     age: 19,
  //     country: "USA"
  //   }, 
  //   {
  //     name: "Mudi",
  //     age: 19,
  //     country: "HK"
  //   }, 
  //   {
  //     name: "Ludi",
  //     age: 20,
  //     country: "UK"
  //   }, 
  //   {
  //     name: "Kudi",
  //     age: 18,
  //     country: "USA"
  //   }
  // ]
  // counterIncrement(){
  //   this.count += 1;
  // } 

  // counterDecrement(){
  //   if(this.count === 0) {
  //     this.count = 0;
  //   } else {
  //     this.count -= 1;
  //   }

  // } 

  // resetCount(){
  //   this.count = 0;
  // } 


  // addItemInParent(newItem: string) {
  //   this.items.push(newItem);
  // }

  // deleteItemInParent() {
  //   this.items.pop();
  // }

  // Event Handlers
  handleFormOnSubmit (form: NgForm) {
    // handle submission here
    const {name, category} = form.value;

    this.tasks.push(new Task(name, "incomplete", category));
    form.reset();
    // console.log(name, category);
  }

} 
