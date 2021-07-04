import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { decrement, increment, reset } from '../state/counter.actions';

@Component({
  selector: 'app-counter-buttons',
  templateUrl: './counter-buttons.component.html',
  styleUrls: ['./counter-buttons.component.scss']
})
export class CounterButtonsComponent implements OnInit {

  constructor(
    private store : Store<{counter : { counter : number }}>
  ) { }

  ngOnInit(): void {
  }

  increment(){
    this.store.dispatch(increment()); 
  }

  decrement(){
    this.store.dispatch(decrement()); 
  }

  reset(){
    this.store.dispatch(reset()); 
  }

}
