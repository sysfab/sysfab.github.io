export default function Home({ now }) {
  return (
    <main className="container">
      <section className="card">
        <div className="hero">
          <h1>
            Hi, I’m <span className="gradient">sysfab</span>
          </h1>

          <p className="subtitle">
            Python Developer. I build applications, bots and scripts. Also had experience with Lua, JS, C#
          </p>

          <div className="actions">
            <a
              className="button primary"
              href="https://github.com/sysfab"
            >
              GitHub
            </a>

            <a
              className="button secondary"
              href="https://www.fiverr.com/sysfab"
            >
              Fiverr
            </a>
          </div>
        </div>

        <div className="footer">
          <span>Discord: @sysfab</span>
          <span>Telegram: @sysfab64</span>
        </div>
      </section>
    </main>
  );
}

export async function getStaticProps() {
  return {
    props: {

    }
  };
}
