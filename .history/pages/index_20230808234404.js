import { Container } from "@chakra-ui/react";
import AddTodo from "../components/AddTodo";
import Auth from "../components/Auths";
import List from "../components/List";
import Add from "../components/Add";
import Auth from "../components/Auths"

export default function Home() {
  return (
    <Container maxW="7xl">
      <Auth />
      <Add />
      <List />
    </Container>
  );
}