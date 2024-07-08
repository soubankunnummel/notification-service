// import mongoose, { Schema } from 'mongoose';

// const notificationSchema = new Schema({
//     recipient: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
//     sender: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
//     type: { type: String, required: true }, // e.g., 'like', 'follow', 'createPost', 'message'
//     message: { type: String, required: true },
//     isRead: { type: Boolean, default: false },
//     createdAt: { type: Date, default: Date.now },
// }, {
//     timestamps: true,
// });

// const NotificationModel = mongoose.model('Notification', notificationSchema);
// export default NotificationModel;
