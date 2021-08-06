import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { sum } from '../store/sum.action';

@Component({
  selector: 'app-sum',
  templateUrl: './sum.component.html',
  styleUrls: ['./sum.component.css'],
})
export class SumComponent implements OnInit {
  sum$: Observable<number>;
  form: FormGroup;
  constructor(private store: Store<{ sum: number }>, private fb: FormBuilder) {
    this.sum$ = store.select('sum');
    this.form = this.createForm();
  }

  ngOnInit(): void {}
  createForm() {
    return this.fb.group({
      valueA: [],
      valueB: [],
    });
  }
  onSubmit() {
    this.store.dispatch(sum(this.form.value));
  }
}
