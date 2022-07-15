import Container from "@mui/material/Container";
import { Routes, Route, Navigate } from "react-router-dom";
import "./App.css";
import Comments from "./Components/Comments/Comments";

function App() {
  return (
    <Container maxWidth="lg">
      <Routes>
        <Route path="/comments/:page" element={<Comments />} />
        <Route path="*" element={<Navigate to="/comments/1" replace />} />
      </Routes>
    </Container>
  );
}

export default App;
