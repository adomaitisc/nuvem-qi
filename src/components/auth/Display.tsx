import { useRef } from "react";

import "./Display.css";

type FieldProps = {
  label: string;
  type: string;
  placeholder: string;
  ref: any;
};

type ButtonProps = {
  label: string;
  onClick: any;
};

export function Field(props: FieldProps) {
  return (
    <div className="field-wrapper">
      <label className="field-label">{props.label}</label>
      <input
        className="field-input"
        type={props.type}
        required
        placeholder={props.placeholder}
        ref={props.ref}
      />
    </div>
  );
}

export function Button(props: ButtonProps) {
  return (
    <button className="button-submit" type="submit" onClick={props.onClick}>
      {props.label}
    </button>
  );
}

export function Forgot(props: ButtonProps) {
  return (
    <button className="button-forgot" type="button" onClick={props.onClick}>
      {props.label}
    </button>
  );
}
