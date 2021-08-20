import React, {useState} from 'react'
import { useEffect } from 'react';
import NotificationCard from '../../components/NotificationCard/NotificationCard';
import * as NotificationAPI from "../../utilities/notification-api";
import './NotificationPage.css'

export default function NotificationPage() {
  const [notifications, setNotification] = useState([]);
  
  const getNotifications = async() => {
    try {
      const notificationList = await NotificationAPI.getNotifications();
      setNotification(notificationList);
    } catch(err) {
      console.log(err.message);
    }
  }

  useEffect(() => {
    getNotifications();
  }, [])

  return (
    <div className="notifPage">
      <h3>My Notifications</h3>
      {notifications.length? notifications.slice(0).reverse().map(not => {
        return <NotificationCard  key={not._id} project={not.projectId} fromUser = {not.fromUser.name} />
      }):<p>No Notifications</p>
    }
    </div>
  )
}
