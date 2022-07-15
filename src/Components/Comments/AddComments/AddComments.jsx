import { Box, Button, Modal, TextField } from "@mui/material";
import React, { useState } from "react";
import dateFormat from "dateformat";
import { useSelector, useDispatch } from "react-redux";
import { addNewComment } from "../../../Redux/commentsSlice";
import s from "./AddComments.module.scss";
import { useForm } from "react-hook-form";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  boxShadow: 24,
  p: 4,
  paddingBottom: 2,
};

const AddCommments = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const dispatch = useDispatch();
  const author = useSelector((state) => state.auth.author);

  const nowDate = dateFormat(new Date(), `d mmmm yyyy, 'at' hh:MM`);

  const onSubmit = (value) => {
    let obj = {
      id: 0,
      body: value.body,
      created_at: nowDate,
      author: author,
    };
    dispatch(addNewComment(obj));
    handleClose();
  };

  return (
    <div className={s.addComments}>
      <Button variant="contained" onClick={handleOpen}>
        Оставить комментарий
      </Button>
      <Modal open={open} onClose={handleClose}>
        <Box sx={style}>
          <form
            className={s.form}
            noValidate
            onSubmit={handleSubmit((values) => onSubmit(values))}
          >
            <TextField
              {...register("body", {
                required: {
                  value: true,
                  message: "Это поле обязательно",
                },
                maxLength: {
                  value: 1000,
                  message: "Вы не можете ввести более 1000 символов",
                },
                minLength: {
                  value: 3,
                  message: "Нужно ввести минимум 3 символа",
                },
              })}
              id="body"
              required={true}
              label="Комментарий"
              multiline
              rows={6}
              fullWidth
              error={Boolean(errors.body?.message)}
              helperText={errors.body?.message}
            />
            <Button
              type="submit"
              variant="contained"
              style={{
                marginTop: "15px",
                width: "100px",
              }}
            >
              Добавить
            </Button>
          </form>
        </Box>
      </Modal>
    </div>
  );
};

export default AddCommments;
