import Link from 'next/prefetch'
import Header from '../components/head'
import Navbar from '../components/navbar'
import config from '../config'

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
    `}</style>
  </div>
)
