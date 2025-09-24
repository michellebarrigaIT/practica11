import { createContext, useContext, useEffect, useState, type ReactNode } from "react";
import type { Notification, NotificationType} from "../types/Notification"


type NotificationContextType = {
    notification: Notification  | null;
    setNotification: (notification: Notification) => void;
    showNotification: (message: string, type: NotificationType) => void;
    clearNotification: () => void;
}

const NotificationContext = createContext<NotificationContextType | undefined>(undefined);

export const NotificationProvider = ({children}: {children: ReactNode}) => {
    const [notification, setNotification] = useState<Notification | null>(null);

    const showNotification = (message: string, type: NotificationType) => {
        const colorMap: Record<NotificationType, string> = {
            success: "#456F13",
            error: "red",
            info: "#2E55BB"
        };

        setNotification({
            message,
            type,
            color: colorMap[type]
        });
    };

    const clearNotification = () => {
        setNotification(null);
    };

    useEffect(() => {
        if (notification) {
            const timer = setTimeout(() => {
                clearNotification();
            }, 3000);
            return () => clearTimeout(timer);
        }
    }, [notification]);


    return (
        <NotificationContext.Provider value={{notification, setNotification, showNotification, clearNotification}}>
            {children}
        </NotificationContext.Provider>
    )
}

export const useNotification = () => {
    const context = useContext(NotificationContext);
    if(!context) {
        throw new Error('useNotification must be used whitin a theme provider');
    }
    return context;
}
