import { useNotification } from "../../contexts/NotificationContext";

const SuccessButton = () => {
    const { showNotification } = useNotification();

    return (
        <button onClick={() => showNotification("Item saved!", "success")}>
            Show Success Notification
        </button>
    );
};

export default SuccessButton;
