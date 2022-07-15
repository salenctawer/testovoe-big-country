import { Avatar } from "@mui/material";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchComments } from "../../Redux/commentsSlice";
import Skeleton from "../Skeleton/Skeleton";
import s from "./Comment.module.scss";

const Comments = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const [commentsPerPage, setCommentsPerPage] = useState(20);

  const comments = useSelector((state) => state.comments.items);
  const loading = useSelector((state) => state.comments.status);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchComments());
  }, []);

  if (loading !== "loaded") {
    return <Skeleton />;
  }
  return (
    <div className={s.comments}>
      Comments
      {comments.map((item) => (
        <div className={s.card} key={item.id}>
          <div>
            <div>
              <Avatar src={item.author.avatar} />
            </div>
          </div>
          <div>
            <div></div>
          </div>
          <div>{item.body}</div>
        </div>
      ))}
    </div>
  );
};

export default Comments;
