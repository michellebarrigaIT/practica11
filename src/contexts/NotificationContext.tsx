import { createContext, useContext, useState, type ReactNode } from "react";
import type { Notification} from "../types/Notification"


type NotificationContextType = {
    notification: Notification;
    setNotification: (notification: Notification) => void;
}

const defaultValue: Notification = {
  message: "",
  type: "info",
  color: ""
};

export const NotificationContext = createContext<NotificationContextType | undefined>(undefined);

export const NotificationProvider = ({children}: {children: ReactNode}) => {
    const [notification, setNotification] = useState<Notification>(defaultValue);

    return (
        <NotificationContext.Provider value={{notification, setNotification}}>
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
