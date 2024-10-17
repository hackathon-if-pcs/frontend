import { createUser } from "api/users_api";
import Input from "components/Input";
import { RefObject, useRef } from "react"

const UserForm = () => {

  const email = useRef<HTMLInputElement>(null);
  const username = useRef<HTMLInputElement>(null);
  const birth = useRef<HTMLInputElement>(null);
  const name = useRef<HTMLInputElement>(null);
  const password = useRef<HTMLInputElement>(null);
  const file = useRef<HTMLInputElement>(null);

  const onSubmit = (ev:React.FormEvent<HTMLFormElement>) => {
    ev.preventDefault()
    const data = new FormData();
    data.append("email", getValue(email));
    data.append("username", getValue(username));
    data.append("birth", getValue(birth));
    data.append("full_name", getValue(name));
    if (file.current?.files && file.current.files[0]) {
      data.append("image", file.current.files[0]);
    }
    data.append("password", getValue(password));
    createUser(data);
  }

  const getValue = (str:RefObject<HTMLInputElement>) => {
    return str.current?.value || ""
  }

  return (
    <form onSubmit={onSubmit}>
      <Input label="email" type="text" input_ref={email} />
      <Input label="username" type="text" input_ref={username} />
      <Input label="birth" type="date" input_ref={birth} />
      <Input label="name" type="text" input_ref={name} />
      <Input label="password" type="password" input_ref={password} />
      <Input label="file" type="file" input_ref={file} />
      <button>Criar</button>
    </form>
  )
} 

export default UserForm;