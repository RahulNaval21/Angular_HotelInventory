export interface Room {
    totalRooms: number,
    availabeRooms: number;
    bookedRooms: number;
}

export interface RoomList {
    roomNumber: Number,
    roomType: string;
    amenities: string;
    price: number;
    checkInTime: Date;
    checkOutTime: Date;
}