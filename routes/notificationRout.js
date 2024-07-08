// import express from "express";
// import { sendNotification } from "../controller/notificationController.js";

// const router = express.Router();

// router.post("/api/notification/:username", async (req, res) => {
//   try {
//     const { username } = req.params;
//     const { type } = req.body;
//     const data = {
//       username,
//       type,
//     };
//     console.log(data)

//     const notification = await sendNotification(data); 
//     res.status(201).json(notification);
//   } catch (error) {
//     res.status(500).json({ message: error.message }); 
//   }
// });

// export default router;
