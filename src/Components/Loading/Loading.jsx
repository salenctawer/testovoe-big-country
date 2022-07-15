import React from "react";
import Container from "@mui/material/Container";
import image from "../../images/giphy.gif";

import s from "./Loading.module.scss";

const Loading = () => {
  return (
    <Container maxWidth="lg">
      <div className={s.preloader}>
        <img src={image} />
      </div>
    </Container>
  );
};
export default Loading;
