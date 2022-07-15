import { Avatar, Typography } from "@mui/material";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchComments } from "../../Redux/commentsSlice";
import Loading from "../Loading/Loading";
import s from "./Comment.module.scss";
import AddComments from "./AddComments/AddComments";
import { useNavigate } from "react-router-dom";
import dateFormat from "dateformat";

const Comments = () => {
  let page = window.location.pathname.split("/")[2];
  if (!page) {
    page = 1;
  }

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
    return <Loading />;
  }
  return (
    <div className={s.comments}>
      <AddComments />
      <Typography style={{ marginBottom: "15px" }}>Комментарии</Typography>
      <div className={s.pages}>
        {pages.map((p) => (
          <span
            key={p}
            onClick={() => onPageClick(p)}
            className={p == currentPage ? s.activeNumber : s.number}
          >
            {p}
          </span>
        ))}
      </div>
      {sortComments.map((item) => (
        <div className={s.card} key={item.id}>
          <div style={{ display: "flex" }}>
            <div style={{ marginRight: "20px" }}>
              <Avatar src={item.author.avatar} />
            </div>
            <div>
              {item.author.name} <br />
              {item.author.company}
            </div>
            <div style={{ marginLeft: "auto", marginRight: "0" }}>
              {dateFormat(item.created_at, `d mmmm yyyy, 'at' hh:MM`)}
            </div>
          </div>
          <div></div>
          <div style={{ marginTop: "20px" }}>{item.body}</div>
        </div>
      ))}
    </div>
  );
};

export default Comments;
