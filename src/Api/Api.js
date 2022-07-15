import axios from "axios";

const instance = axios.create({
  baseURL: "https://bigcountry-task.vercel.app",
});

export const commentsApi = {
  fetchComments() {
    return instance.get("/comments.json");
  },
};
