import './sidebar.scss';
import DashboardIcon from '@mui/icons-material/Dashboard';
import MoneyOffIcon from '@mui/icons-material/MoneyOff';
import AttachMoneyIcon from '@mui/icons-material/AttachMoney';
import PersonIcon from '@mui/icons-material/Person';
import LogoutIcon from '@mui/icons-material/Logout';

const Sidebar = () => {
    return (
        <div className='sidebar'>
            <div className='top'>
                <span className='logo'>LOGO</span>
            </div>
            <hr />
            <div className='center'>
                <ul>
                    <p className='title'>MAIN</p>
                    <li>
                        <DashboardIcon className='icon' />
                        <span>Dashboard</span>
                    </li>
                    <p className='title'>LISTS</p>
                    <li>
                        <MoneyOffIcon className='icon' />
                        <span>Expenses</span>
                    </li>
                    <li>
                        <AttachMoneyIcon className='icon' />
                        <span>Earnings</span>
                    </li>
                    <p className='title'>USER</p>
                    <li>
                        <PersonIcon className='icon' />
                        <span>Profile</span>
                    </li>
                    <li>
                        <LogoutIcon className='icon' />
                        <span>Logout</span>
                    </li>
                </ul>
            </div>
            <div className='bottom'>
                <div className="colorOption"></div>
                <div className="colorOption"></div>
                </div>
        </div>
    )
}

export default Sidebar