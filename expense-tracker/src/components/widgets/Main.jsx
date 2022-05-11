import Budget from './right/Budget';
import './main.scss';

const Widget = () => {
  return (
    <div className='main'>
      <div className='widget'>

      </div>
      <div className='widget'>
          <Budget/>
          <Budget/>

      </div>
    </div>
  )
}

export default Widget