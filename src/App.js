import Container from "@mui/material/Container";
import "./App.css";
import AddCommments from "./Components/AddComments/AddComments";
import Comments from "./Components/Comments/Comments";

function App() {
  return (
    <Container maxWidth="lg">
      <AddCommments />
      <Comments />
    </Container>
  );
}

export default App;
