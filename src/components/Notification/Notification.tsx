
import { useNotification } from '../../contexts/NotificationContext';

function Notification() {
    const { notification, clearNotification } = useNotification();

    if (!notification) return null;

    return (
        <div>
            {notification.message}
            <button onClick={clearNotification}>
                ✖
            </button>
        </div>
    )
}

export default Notification