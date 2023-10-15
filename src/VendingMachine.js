import { Link } from 'react-router-dom'

export default function VendingMachine() {
  return (
    <>
      <div className="VendingMachine-links">
        <p>
          Gimme <Link to="/soda">soda!</Link>
        </p>
        <p>
          I want <Link to="/candy">candy!</Link>
        </p>
        <p>
          Gotta have some <Link to="/chips">chips!</Link>
        </p>
      </div>
      <img src="https://m.media-amazon.com/images/I/611LnsKrUmL._AC_UX679_.jpg" />
    </>
  )
}
