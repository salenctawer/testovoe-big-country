import { Avatar } from "@mui/material";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchComments } from "../../Redux/commentsSlice";
import Skeleton from "../Skeleton/Skeleton";
import s from "./Comment.module.scss";
import AddComments from "./AddComments/AddComments";
import { useNavigate } from "react-router-dom";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";

const Comments = () => {
  let page = window.location.pathname.split("/")[2];

  const comments = useSelector((state) => state.comments.items);
  const loading = useSelector((state) => state.comments.status);

  const navigate = useNavigate();
  const dispatch = useDispatch();

  const totalCommentsCount = comments.length;
  const [currentPage, setCurrentPage] = useState(page);
  const [pageSize] = useState("20");

  let end = pageSize * currentPage;
  let begin = end - pageSize;

  let sortComments = comments.slice(begin, end);

  let pagesCount = Math.ceil(totalCommentsCount / pageSize);
  let pages = [];
  for (let i = 1; i <= pagesCount; i++) {
    pages.push(i);
  }

  const onPageClick = (p) => {
    setCurrentPage(p);
    navigate(`/comments/${p}`);
  };

  useEffect(() => {
    dispatch(fetchComments());
  }, []);

  if (loading !== "loaded") {
    return <Skeleton />;
  }
  return (
    <div className={s.comments}>
      <AddComments />
      <ArrowBackIcon />
      {pages.map((p) => (
        <span key={p} onClick={() => onPageClick(p)}>
          {p}
        </span>
      ))}
      <ArrowForwardIcon />
      Comments
      {sortComments.map((item) => (
        <div className={s.card} key={item.id}>
          <div>
            <span>{item.id}</span>
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
