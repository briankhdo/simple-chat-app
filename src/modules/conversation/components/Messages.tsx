import axios from "axios";
import React from "react";
import { useForm } from "react-hook-form";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { FixedSizeList as List } from "react-window";
import InfiniteLoader from "react-window-infinite-loader";

import { API_HOST } from "../../../const";
import { useGetMessage } from "../../../utils/apis";
import { usersSelector } from "../../accountSelector/reducers/usersSlice";
import { roomsSelector } from "../reducers/roomsSlice";
import MessageComponent from "./MessageComponent";

const Messages = () => {
  const { register, handleSubmit, reset, setFocus } = useForm();

  const users = useSelector((state) => usersSelector(state));
  const params = useParams();
  const currentUser = users.find((user) => user.id === parseInt(params.userId));
  const rooms = useSelector((state) => roomsSelector(state));
  const currentRoom = rooms.find((room) => room.id === parseInt(params.roomId));

  const { messages, loading, loaded, fetchData, hasMoreData, loadNextPage } =
    useGetMessage(currentRoom.id);

  const postData = (data) => {
    const createMessageApi = `${API_HOST}/api/rooms/${currentRoom.id}/messages`;
    if (data.message.length === 0) return;
    axios
      .post(
        createMessageApi,
        {
          message: {
            ...data,
            user_id: currentUser.id,
          },
        },
        {
          headers: { "Content-Type": "application/json" },
        }
      )
      .then((_response) => {
        fetchData({});
      })
      .catch((error) => {
        console.log(error.data);
      });
  };

  const onSubmit = (data) => {
    postData(data);
    setFocus("message");
    reset(
      {
        message: "",
      },
      {
        keepIsSubmitted: false,
        keepTouched: false,
        keepIsValid: false,
        keepSubmitCount: false,
      }
    );
  };
  const onError = (errors, e) => console.log(errors, e);
  const loadMoreItems = loading ? () => {} : loadNextPage;
  const isItemLoaded = (index) => {
    return !hasMoreData || index < messages.length;
  };

  return (
    <>
      <div>
        {loaded ? (
          <InfiniteLoader
            isItemLoaded={(index) => !hasMoreData || index < messages.length}
            itemCount={hasMoreData ? messages.length + 1 : messages.length}
            loadMoreItems={loadMoreItems}
            threshold={1}
          >
            {({ onItemsRendered, ref }) => (
              <List
                className="List"
                height={500}
                width={1000}
                itemCount={hasMoreData ? messages.length + 1 : messages.length}
                itemSize={60}
                onItemsRendered={onItemsRendered}
                ref={ref}
                itemData={{
                  messages: [...messages].reverse(),
                  isItemLoaded: isItemLoaded,
                  loading: loading,
                }}
              >
                {MessageComponent}
              </List>
            )}
          </InfiniteLoader>
        ) : null}
      </div>
      <form onSubmit={handleSubmit(onSubmit, onError)}>
        <div className="Row">
          <div className="Col">
            <input
              type="text"
              placeholder="Type your message"
              style={{ width: "100% - 20px" }}
              autoComplete="off"
              {...register("message")}
            />
          </div>
          <div className="Col" style={{ flexGrow: 0, width: 50 }}>
            <button>Send</button>
          </div>
        </div>
      </form>
    </>
  );
};

export default Messages;
