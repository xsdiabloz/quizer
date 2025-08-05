import { useEffect, useState } from "react";

export default function useNoti() {
    const [notifications, setNotifications] = useState([])
    useEffect(() => {
        const firstNoti = notifications[0]
        if (firstNoti) {
            const timer = setTimeout(() => {
                removeNotiById(firstNoti.id)
            }, firstNoti?.time ?? 2000)
            return () => {
                clearTimeout(timer)
            }
        }
    })
    const removeNotiById = (id) => {
        setNotifications([...notifications].filter((noti) => noti.id !== id))
    }
    const showNoti = (newNoti) => {
        setNotifications([...notifications, {
            id: (notifications.at(-1)?.id + 1) || 1,
            ...newNoti
        }])
    }
    return {
        notifications, showNoti, removeNotiById
    }
}