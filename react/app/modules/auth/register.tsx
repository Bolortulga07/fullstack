import type { User } from "~/types";
import { FormUser } from "../movies/form";

type Props = {};

const register = (props: Props) => {
  const onClick = (data: User) => {
    fetch("http://localhost:3000/register", {
      method: "POST",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify(data),
    }).then((response) => response.json());
  };

  return <FormUser onSave={onClick} />;
};

export default register;
