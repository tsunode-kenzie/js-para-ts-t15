import { forwardRef, InputHTMLAttributes } from "react";

// onChange, onBlur, name => rest
interface IInputProps extends InputHTMLAttributes<HTMLInputElement> {
  label: string;
  error: string | undefined;
}

const Input = forwardRef<HTMLInputElement, IInputProps>(
  ({ label, id, error, ...rest }, ref) => {
    console.log(rest);
    return (
      <div>
        <label htmlFor={id}>{label}</label>
        <input id={id} ref={ref} {...rest} />
        {error ? <p>{error}</p> : null}
      </div>
    );
  }
);

export default Input;
