import { API_HOST } from "../const";
import { Message } from "../interfaces/message";
import { Room } from "../interfaces/room";
import { User } from "../interfaces/user";
import { useApi } from "./useApi";

export const useGetUsers = (onCompleted: Function = null) => {
  return useApi<User[]>(`${API_HOST}/api/users`, onCompleted);
};

export const useGetRooms = (onCompleted: Function = null) => {
  return useApi<Room[]>(`${API_HOST}/api/rooms`, onCompleted);
};

export const useGetMessage = (roomId: number, onCompleted: Function = null) => {
  return useApi<Message[]>(
    `${API_HOST}/api/rooms/${roomId}/messages`,
    onCompleted
  );
};
