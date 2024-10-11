import express from "express";
import cron from "node-cron";
import dotenv from "dotenv";
import dbConnection from "./utils/db.js";
import sendDeliveredOrder from "./Emailservice/sendDeliveredOrder.js";
import sendPromotionEmail from "./Emailservice/sendPromotionemail.js";
import sendWelcomeEmail from "./Emailservice/sendWelcomeEmail.js";
import sendPendingOrderEmail from "./Emailservice/sendPendingOrderEmail.js";
import sendDeliveredOrderEmail from "./EmailServices/sendDeliveredOrderEmail.js";

dotenv.config();
const app = express();
const PORT = process.env.PORT;

const services = () => {
  cron.schedule("* * * * * *", () => {
    sendDeliveredOrder();
    sendPromotionEmail();
    sendDeliveredOrderEmail();
  });
};
const promotion = () => {
  cron.schedule("* * * * * *",  () => {
    
  });
};

services();
promotion();

app.listen(PORT, () => {
  console.log(`Backgroundservice is running on port ${PORT}`);
  dbConnection();
});
