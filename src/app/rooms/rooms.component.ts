import { Component, OnInit } from '@angular/core';
import { Room, RoomList } from './rooms';

@Component({
  selector: 'hinv-rooms',
  templateUrl: './rooms.component.html',
  styleUrl: './rooms.component.scss', 

  // host: {ngSkipHydration: 'true'},
})
export class RoomsComponent implements OnInit{

  hotelName = "ITC";
  numberOfRooms = 10;
  hideRooms = false;

  selectedRoom!: RoomList

  rooms: Room = {
    totalRooms:50,
    availabeRooms: 15,
    bookedRooms: 5,
  }

  title = 'Room List'

  roomList: RoomList[] = []

  toggle(){
    this.hideRooms = !this.hideRooms
    this.title = "Rooms List"
  }

  selectRoom(room:RoomList){
    console.log(room)
    this.selectedRoom = room
  }

  addRoom(){
    const room: RoomList = {
      roomNumber: 104,
        roomType: 'Super-Delux',
      amenities: 'Ac',
      price: 5000,
      checkInTime: new Date('30-july-2024'),
      checkOutTime: new Date('31-july-2024'),
    }

   // this.roomList.push(room);
   this.roomList = [...this.roomList,room];
  }

  constructor(){

  }

  ngOnInit(): void {
    this.roomList = [
      {
        roomNumber: 101,
        roomType: 'Delux',
      amenities: 'Ac',
      price: 4000,
      checkInTime: new Date('08-july-2024'),
      checkOutTime: new Date('09-july-2024'),
      },
      {
        roomNumber: 102,
        roomType: 'Business',
      amenities: 'Ac,Free wifi',
      price: 5000,
      checkInTime: new Date('08-july-2024'),
      checkOutTime: new Date('19-july-2024'),
      },
      {
        roomNumber: 103,
        roomType: 'Premium',
      amenities: 'Ac,Free wifi,lift',
      price: 6000,
      checkInTime: new Date('18-july-2024'),
      checkOutTime: new Date('29-july-2024'),
      },
    ]
  }
}
