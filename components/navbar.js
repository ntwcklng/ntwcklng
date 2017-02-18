import Link from 'next/prefetch'

export default ({links}) => (
  <div className="navbar">
    <ul>
      {links.map(link => <li key={link.href}><Link href={link.href}><a>{link.title}</a></Link></li>)}
    </ul>
    <style jsx>{`
      .navbar {
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        background: rgba(255, 255, 255, .9);
        color: #585858;
        padding: 25px 15px;
        font-size: 15px;
      }
      ul {
        list-style: none;
      }
      li {
        display: inline-block;
        margin-right: 25px;
      }

    `}</style>
  </div>
)