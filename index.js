import dotenv from "dotenv";
dotenv.config();
import express from "express";
import { createServer } from "http";
import { Server } from "socket.io";

import cors from "cors";
// import router from "./routes/notificationRout.js";
import { sendNotification } from "./controller/notificationController.js";

const app = express();

app.use(cors());
app.use(express.json());

const server = createServer(app);

const io = new Server(server, {
  cors: {
    origin: "http://localhost:3000/",
  },
  transports: ["websocket", "polling"],
});

const userSocketMap = new Map();

// app.use(router);

io.on("connection", async (socket) => {
  console.log(`User connected: ${socket.id}`);

  // Store socket ID against username when user connects
  socket.on("register", (username) => {
    userSocketMap.set(username, socket.id);
  });

  socket.on("disconnect", () => {
    console.log(`User disconnected: ${socket.id}`);
    userSocketMap.forEach((value, key) => {
      if (value === socket.id) {
        userSocketMap.delete(key);
      }
    });
  });
});

app.post("/api/notification/:username", async (req, res) => {
  try {
    const { username } = req.params;
    const { type } = req.body;
    const data = { username, type };
    // console.log(data);

    const notification = await sendNotification(data);
    // console.log(notification);

    const recipientSocketId = userSocketMap.get(username);
    if (recipientSocketId) {
      io.to(recipientSocketId).emit("notification", notification);
    }

    res.status(201).json(notification);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

server.listen(8002, () => {
  console.log(`Notification server running on port 8002`);
});


 

// / socket.on("like", (data) => {
  //   console.log(`Like event received: ${JSON.stringify(data)}`);
  //   const notification = {
  //     type: "like",
  //     message: `${data.username} liked your post`,
  //   };
  //   socket.broadcast.emit("notification", notification);
  // });