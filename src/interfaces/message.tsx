import { Room } from "./room";
import { User } from "./user";

export interface Message {
  user: User;
  room: Room;
  message: string;
}
