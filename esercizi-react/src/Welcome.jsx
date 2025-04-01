import { useParams } from "react-router-dom";

export default function Welcome() {
  const { name = "User" } = useParams();
  return <p>Welcome, {name}!</p>;
}
