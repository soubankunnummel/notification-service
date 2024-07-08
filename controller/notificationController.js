// Ensure this file is correctly named and located
export const sendNotification = async (data) => {
    const { username, type } = data;
  
    let message;
    if (type === "like") {
      message = `${username} liked your post`;
    } else if (type === "post") {
      message = `${username} posted something new`;
    } else if (type === "follow") {
      message = `${username} followed you`;
    } else {
      message = `${username} performed an action`;
    }
  
    const notification = {
      type,
      message,
  };

  
    return notification;
  };
  