import Link from 'next/prefetch'
import Router from 'next/router'
import Header from '../components/head'
import Navbar from '../components/navbar'
import config from '../config'
import Progress from 'nprogress'

Router.onRouteChangeStart = () => Progress.start()
Router.onRouteChangeComplete = () => Progress.done()
Router.onRouteChangeError = () => Progress.done()

export default ({children}) => (
  <div className="main">
    <Navbar links={config.navbarLinks}/>

    {children}
    <Header  />

    <style jsx>{`
      .main {
        padding: 25px 50px;
        margin: 100px auto;
        width: 90%;
        max-width: 700px;
      }
      #nprogress {
        pointer-events: none;
      }

      #nprogress .bar {
        background: #4492ff;
        position: fixed;
        z-index: 1031;
        top: 0;
        left: 0;
        width: 100%;
        height: 2px;
      }

      #nprogress .peg {
        display: block;
        position: absolute;
        right: 0px;
        width: 100px;
        height: 100%;
        box-shadow: 0 0 10px #4492ff, 0 0 5px #4492ff;
        opacity: 1.0;
        transform: rotate(3deg) translate(0px, -4px);
      }
    `}</style>
  </div>
)
