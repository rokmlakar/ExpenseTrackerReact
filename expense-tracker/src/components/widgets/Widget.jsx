import './widget.scss';

const Widget = () => {
  return (
    <div className='widget'>
        <div className="left">
            <span className='title'>Users</span>
            <span className='counter'>123</span>
            <span className='link'>See all usser</span>
        </div>
        <div className="right">
            <div className="percentage"></div>
        </div>
    </div>
  )
}

export default Widget