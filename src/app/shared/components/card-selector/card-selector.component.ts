import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-card-selector',
  templateUrl: './card-selector.component.html',
  styleUrls: ['./card-selector.component.scss']
})
export class CardSelectorComponent implements OnInit {

  @Input() value: any;
  @Input() radioButtonName: string;
  @Input() model: any;
  @Output() modelChange = new EventEmitter<any>();

  constructor() { }

  ngOnInit(): void {
  }

  clickSelectionArea(): void {
    this.modelChange.emit(this.value);
  }


  changeSelection($event: any): any{
    this.modelChange.emit($event);
  }

  isSelected(): boolean {
    return this.model === this.value;
  }
}
