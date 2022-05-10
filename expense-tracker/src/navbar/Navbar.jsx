import { ChatBubbleOutline } from '@mui/icons-material';
import SearchIcon from '@mui/icons-material/Search';
import './navbar.scss'

const Navbar = () => {
  return (
    <div className='navbar'>
      <div className="wrapper">
        <div className="search">
          <input type="text" placeholder='Search..' />
          <SearchIcon />
          <div className="items">
            <div className="item">
              <img src="https://www.blexar.com/avatar.png" className='avatar' alt="" />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Navbar