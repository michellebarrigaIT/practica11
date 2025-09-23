import { useNotification } from "../../contexts/NotificationContext";

const ErrorButton = () => {
    const { showNotification } = useNotification();

    return (
        <button onClick={() => showNotification("Error!", "error")}>
            Show Error Notification
        </button>
    );
};

export default ErrorButton;
