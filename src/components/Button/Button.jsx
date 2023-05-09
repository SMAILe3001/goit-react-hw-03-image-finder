import CSS from './Button.module.css';

export function Button({ onClick }) {
  return (
    <button className={CSS.Button} onClick={onClick}>
      download more
    </button>
  );
}
