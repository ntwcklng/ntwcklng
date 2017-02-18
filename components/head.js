import Head from 'next/head'
import config from '../config'

export default () => (
  <div>
    <Head>
      <title>{config.title}</title>
      <meta name="viewport" content="width=device-width, initial-scale=1" />
    </Head>
    <style jsx global>{`
      * {
        margin: 0;
        box-sizing: border-box
      }
      body {
        font: 13px Menlo, Monaco, Lucida Console, Liberation Mono, DejaVu Sans Mono, Bitstream Vera Sans Mono, Courier New, monospace, serif;
        color: #4e4e4e;
      }
      a {
        color: #66d9ef;
        -webkit-tap-highlight-color: rgba(0,0,0,0);
      }
      a:hover {
        color: #fff;
        background: #66d9ef;
        text-decoration: none;
      }
      img {
        max-width: 100%;
        margin: 25px 0;
      }
    `}</style>
  </div>
)