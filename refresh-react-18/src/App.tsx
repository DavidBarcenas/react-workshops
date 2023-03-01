import "./app.css";

export function App() {
  return (
    <article className="tw-follow-card">
      <header className="tw-follow-header">
        <img
          className="tw-follow-avatar"
          src="https://unavatar.io/sindresorhus@gmail.com"
          alt="Avatar"
        />
        <div className="tw-follow-info">
          <strong>David Bárcenas</strong>
          <span className="tw-follow-username">@daveeb</span>
        </div>
      </header>
      <aside>
        <button className="tw-follow-btn">Seguir</button>
      </aside>
    </article>
  );
}
