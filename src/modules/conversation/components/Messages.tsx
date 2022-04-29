import axios from "axios";
import React, { useEffect, useRef } from "react";
import { useForm } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { ClipLoader } from "react-spinners";
import { API_HOST } from "../../../const";
import { useGetMessage, useGetRooms } from "../../../utils/apis";
import { usersSelector } from "../../accountSelector/reducers/usersSlice";
import {
  roomsSelector,
  setCurrentRoom,
  setRooms,
} from "../reducers/roomsSlice";
import MessageComponent from "./MessageComponent";

const Messages = () => {
  const { register, handleSubmit, reset, setFocus } = useForm();
  const dispatch = useDispatch();

  const users = useSelector((state) => usersSelector(state));
  const params = useParams();
  const currentUser = users.find((user) => user.id === parseInt(params.userId));
  const rooms = useSelector((state) => roomsSelector(state));
  const currentRoom = rooms.find((room) => room.id === parseInt(params.roomId));

  const {
    result: messages,
    loading,
    loaded,
    fetchData,
  } = useGetMessage(currentRoom.id);

  const createMessageApi = `${API_HOST}/api/rooms/${currentRoom.id}/messages`;

  const messagesRef = useRef(null);
  const scrollToBottom = () => {
    messagesRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  const handleScroll = () => {
    console.log(
      messagesRef.current.clientHeight,
      messagesRef.current.scrollTop,
      messagesRef.current.offsetHeight
    );
    if (messagesRef.current.scrollTop !== messagesRef.current.offsetHeight)
      return;
    console.log("Fetch more list items!");
  };

  useEffect(() => {
    setFocus("message");
    scrollToBottom();
    messagesRef.current.addEventListener("scroll", handleScroll);
    return () =>
      messagesRef.current.removeEventListener("scroll", handleScroll);
  }, [setFocus, messages]);

  const postData = (data) => {
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
        fetchData();
      })
      .catch((error) => {
        console.log(error.data);
      });
  };

  const onSubmit = (data, e) => {
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

  return (
    <>
      <ClipLoader loading={loading} size={20} />
      <div className="Messages" ref={messagesRef}>
        {loaded
          ? [...messages]
              .reverse()
              .map((message) => <MessageComponent message={message} />)
          : null}
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
