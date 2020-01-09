import React from 'react'
import Head from 'next/head'

const Home = () => (
  <div>
    <Head>
      <title>Ladada.cc</title>
      <link rel="icon" href="/favicon.ico" />
    </Head>

    <div className="hero">
      <img src='./cover.jpg' alt="cover" />
    </div>
    <p className="coming-soon">Coming Soon...</p>

    <style jsx>{`
      :global(html) {
        height: 100vh;
      }
      :global(body) {
        margin: 0;
        font-family: -apple-system, BlinkMacSystemFont, Avenir Next, Avenir,
          Helvetica, sans-serif;
        height: 100%;
        display: flex;
        align-items: center;
      }
      .hero {
        width: 100%;
      }
      img {
        width: 100%;
      }
      .coming-soon {
        text-align: center;
        color: violet;
        font-size: 30px;
      }
    `}</style>
  </div>
)

export default Home
