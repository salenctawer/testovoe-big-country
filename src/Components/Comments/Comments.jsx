import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchComments } from "../../Redux/commentsSlice";

const Comments = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchComments());
  });

  return <div>comments</div>;
};

export default Comments;
