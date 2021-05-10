import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {

  @Input()
  age!: number;
  @Input()
  name!: string;
  @Input()
  lastName!: string;
  @Input()
  sexe!: string;
  @Input()
  majority!: string;
  displayed: boolean = false;
  constructor() { }

  ngOnInit(): void {
  }

  public change() {
    if(this.age >= 18)
      this.majority = "adulte";
    else {
      this.majority = "mineur"
    }
    this.displayed = true;
  }

}
