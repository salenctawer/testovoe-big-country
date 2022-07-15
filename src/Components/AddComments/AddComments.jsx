import { Box, Button, Modal, TextField } from "@mui/material";
import React, { useState } from "react";
import dateFormat from "dateformat";
import { useSelector, useDispatch } from "react-redux";
import { addNewComment } from "../../Redux/commentsSlice";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  boxShadow: 24,
  p: 4,
};

const AddCommments = () => {
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const [value, setValue] = useState("");

  const dispatch = useDispatch();
  const author = useSelector((state) => state.auth.author);

  const nowDate = dateFormat(new Date(), `d mmmm yyyy, 'at' hh:MM`);

  const onSubmit = () => {
    let obj = {
      id: 0,
      body: value,
      created_at: nowDate,
      author: author,
    };
    dispatch(addNewComment(obj));
  };

  return (
    <div>
      <Button variant="contained" onClick={handleOpen}>
        Оставить комментарий
      </Button>
      <Modal open={open} onClose={handleClose}>
        <Box sx={style}>
          <TextField
            id="outlined-multiline-static"
            label="Multiline"
            multiline
            rows={4}
            value={value}
            onChange={(event) => setValue(event.target.value)}
          />
          <Button onClick={onSubmit}>Добавить</Button>
        </Box>
      </Modal>
    </div>
  );
};

export default AddCommments;
