import axios from "axios";
import { useCallback, useEffect, useState } from "react";
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
  const [response, setResponse] = useState<PaginatedData<Message[]>>();
  const [messages, setMessages] = useState<Message[]>();
  const [loading, setLoading] = useState<boolean>(false);
  const [loaded, setLoaded] = useState<boolean>(false);
  const [error, setError] = useState<any>();
  const [refreshIndex, setRefreshIndex] = useState<number>(0);
  const [hasMoreData, setHasMoreData] = useState<boolean>(true);

  const refresh = () => {
    setRefreshIndex(refreshIndex + 1);
  };

  const fetchData = useCallback(
    (params: any, modityType: string = null) => {
      setLoading(true);
      axios
        .get<PaginatedData<Message[]>>(
          `${API_HOST}/api/rooms/${roomId}/messages`,
          { params }
        )
        .then((r) => {
          const paginatedResponse = r.data;
          setResponse(paginatedResponse);
          setHasMoreData(paginatedResponse.more);

          if (modityType === "append") {
            setMessages(messages.concat(paginatedResponse.data));
          } else if (modityType === "prepend") {
            setMessages(paginatedResponse.data.concat(messages));
          } else {
            setMessages(paginatedResponse.data);
          }

          setLoading(false);
          setLoaded(true);
          if (onCompleted) onCompleted();
        })
        .catch((error) => {
          setLoading(false);
          if (error.response) {
            setError(error.response.data);
          } else {
            setError(error.message);
          }
        });
    },
    [onCompleted, roomId]
  );

  const loadNextPage = () => {
    fetchData({ start_id: response.first_id }, "append");
  };

  const loadPrevPage = () => {
    fetchData({ end_id: response.last_id }, "append");
  };

  useEffect(() => {
    setLoading(true);
    fetchData({});
  }, [refreshIndex, fetchData, roomId]);

  return {
    messages,
    loading,
    loaded,
    fetchData,
    hasMoreData,
    loadNextPage,
    loadPrevPage,
    error,
    refresh,
  };
};
