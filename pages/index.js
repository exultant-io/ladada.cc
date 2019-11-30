import React from 'react'
import Head from 'next/head'

const Home = () => (
  <div>
    <Head>
      <title>Ladada.cc</title>
      <link rel="icon" href="/favicon.ico" />
    </Head>

    <div className="hero">
      <img src='./cover.png' alt="cover" />
    </div>

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
    `}</style>
  </div>
)

export default Home
