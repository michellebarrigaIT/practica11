
import { useNotification } from '../../contexts/NotificationContext';
import { IoMdCloseCircleOutline } from "react-icons/io";
import './Notification.scss'

function Notification() {
    const { notification, clearNotification } = useNotification();

    if (!notification) return null;

    return (
        <div className='notification' style={{
            backgroundColor: notification.color,
        }}>
            {notification.message}
            
            <IoMdCloseCircleOutline onClick={clearNotification} className='btn'/>
            
        </div>
    )
}

export default Notification