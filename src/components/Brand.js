export default function Brand({ onClick }) {
  return (
    <a
      className="brand"
      href="#inicio"
      onClick={(event) => {
        event.preventDefault();
        onClick?.();
      }}
      aria-label="Food Flow"
    >
      <svg className="brand-mark" viewBox="0 0 150 65" aria-hidden="true">
        <path d="M5 38h39l-2 8H5c-5 0-6-8 0-8Zm43-4L59 1h24L69 37h22L52 64l9-30H48Z" />
        <path d="M91 27h47c5 0 5 7 0 7h-34l-5 5h39c5 0 5 7 0 7h-43l-5 5h47c5 0 5 7 0 7H93c-9 0-13-6-8-13l9-13c2-3 5-5 10-5Z" />
      </svg>
      <span>Food<br />Flow</span>
    </a>
  );
}
