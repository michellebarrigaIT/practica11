
import { useNotification } from '../../contexts/NotificationContext';
import { IoMdCloseCircleOutline } from "react-icons/io";
import './Notification.scss'
import { AiOutlineCheckCircle } from 'react-icons/ai';
import { MdErrorOutline } from 'react-icons/md';
import { CiCircleInfo } from 'react-icons/ci';
import type { JSX } from 'react';

function Notification() {
    const { notification, clearNotification } = useNotification();

    if (!notification) return null;

    const iconMap: Record<typeof notification.type, JSX.Element> = {
        success: <AiOutlineCheckCircle />,
        error: <MdErrorOutline />,
        info: <CiCircleInfo />,
    };

    return (
        <div className='notification' style={{
            backgroundColor: notification.color,
        }}>
            <span className="icon">{iconMap[notification.type]}</span>
            <span className="message">{notification.message}</span>
            <IoMdCloseCircleOutline onClick={clearNotification} className='btn'/>
        </div>
    )
}

export default Notification