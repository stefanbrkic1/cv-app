function EntryPage({ handleContent }) {
  return (
    <div className="entry-container">
      {/* Header section */}
      <header className="header">wwww.resumifyapp.com</header>

      {/* Main content section */}
      <main className="entry-main">
        <div className="heading-flex">
          <h1 className="heading-text">Welcome to</h1>
          <div className="resumify-text"></div>
        </div>
        <h2 className="heading-subtext">
          Build beautiful resumes easily with our app and land your dream job
        </h2>
        <button type="button" className="start-btn" onClick={handleContent}>
          Get Started
        </button>
      </main>

      {/* Footer section */}
      <footer className="footer">
        <a href="https://github.com/stefanbrkic1" target="blank">
          @stefanbrkic1
        </a>
        <div className="github-logo"></div>
      </footer>
    </div>
  );
}

export default EntryPage;
