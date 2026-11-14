export default function Button({
  children,
  type = "button",
  className = "",
  onClick,
  disabled = false,
  ...props
}) {
  return (
    <button
      type={type}
      className={`primary-btn ${className}`.trim()}
      onClick={onClick}
      disabled={disabled}
      {...props}
    >
      {children}
    </button>
  );
}
