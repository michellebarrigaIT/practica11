import { useNotification } from "../../contexts/NotificationContext";

const InfoButton = () => {
    const { showNotification } = useNotification();

    return (
        <button onClick={() => showNotification("Welcome!", "info")}>
            Welcome Notification
        </button>
    );
};

export default InfoButton;
