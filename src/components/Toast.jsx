export default function Toast({ msg, visible }) {
  return (
    <div
      className={`ts-toast ${visible ? "show" : ""}`}
      role="alert"
      aria-live="assertive"
    >
      {msg}
    </div>
  );
}
