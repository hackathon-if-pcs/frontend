import { HTMLInputTypeAttribute, RefObject } from "react";

interface InputInterface{
  input_ref:RefObject<HTMLInputElement>,
  label:string, 
  type:HTMLInputTypeAttribute
}

const Input = (props:InputInterface) => {
  return <div>
    <label htmlFor={props.label}>{props.label[0].toUpperCase() + props.label.slice(1)}</label>
    <input ref={props.input_ref} type={props.type} name={props.label} />
  </div>
}

export default Input;