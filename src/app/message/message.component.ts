import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-message',
  templateUrl: './message.component.html',
  styleUrls: ['./message.component.css']
})
export class MessageComponent implements OnInit {

  @Input()
  age !: number;
  @Input()
  name!: string;
  @Input()
  lastName!: string;
  @Input()
  sexe!: string;
  @Input()
  majority!: string;
  @Input()
  displayed!: boolean;
  constructor() { }

  ngOnInit(): void {
  }
}
