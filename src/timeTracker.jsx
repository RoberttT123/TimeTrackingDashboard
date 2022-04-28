import react from 'react';
import UserInfo from './component/userInfo/userInfo';
const TimeTracker=()=>{
    return(
        <div className='timeTracker'>
         <div className='timeList'>
            <UserInfo />
            <div className='userInfo'></div>
        <div className='time'> </div>

      </div>
      <div className='tracker'>

      </div>

    </div>
    );
}
export default TimeTracker;