import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { PreferenceItem } from '../models/preference-item';
import { NavService } from '../service/nav.service';

@Component({
  selector: 'app-preference-list-item',
  templateUrl: './preference-list-item.component.html',
  styleUrls: ['./preference-list-item.component.css'],
  
})
export class PreferenceListItemComponent implements OnInit {


  @Input() preference!: PreferenceItem;

  @Output() onPreferenceClick: EventEmitter<PreferenceItem>;


  constructor(public navService: NavService) {
    this.onPreferenceClick = new EventEmitter<PreferenceItem>();

  }

  ngOnInit() { }

  onItemSelected(item: PreferenceItem) {
    console.log(item)
    this.onPreferenceClick.emit(item)
 }

}
