import { Component, Input, OnInit, Output, EventEmitter, ChangeDetectionStrategy, OnChanges, SimpleChanges } from '@angular/core';
import { RoomList } from '../rooms';

@Component({
  selector: 'hinv-rooms-list',
  templateUrl: './rooms-list.component.html',
  styleUrl: './rooms-list.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})


export class RoomsListComponent implements OnInit, OnChanges {
  @Input() rooms: RoomList[] = [];

  @Input() title: string = ''

  @Output() selectedRoom = new EventEmitter<RoomList>();

  // notify: EventEmitter<string> = new EventEmitter<string>();

  constructor() {

  }

  ngOnChanges(changes: SimpleChanges): void {
    console.log(changes)
    if(changes['title']){
    this.title = changes['title'].currentValue.toUpperCase()
    }
  }

  ngOnInit(): void {

  }

  selectRoom(room: RoomList) {
    this.selectedRoom.emit(room);
  }
}
