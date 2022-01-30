import { useRef } from "react";

import "./Display.css";

type FieldProps = {
  label: string;
  type: string;
  value: string;
  placeholder: string;
  onChange: any;
  pattern?: string;
  info?: string;
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
        id="input"
        className="field-input"
        type={props.type}
        required
        placeholder={props.placeholder}
        onChange={props.onChange}
        value={props.value}
        pattern={props.pattern}
      />
      {props.info && <p className="field-info">{props.info}</p>}
    </div>
  );
}

export function Button(props: ButtonProps) {
  return (
    <button type="button" className="button-submit" onClick={props.onClick}>
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
