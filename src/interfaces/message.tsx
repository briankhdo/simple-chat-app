import { Room } from "./room";
import { User } from "./user";

export interface Message {
  id: number;
  user: User;
  room: Room;
  message: string;
}
