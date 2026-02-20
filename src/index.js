import dotenv from "dotenv";
import { app } from "./app.js";
import connectDB from "./db/index.js";

dotenv.config({ path: "./src/.env" })

const PORT = process.env.PORT || 8001;

connectDB()
.then(() => {
    app.listen(PORT, () => {
        console.log(`Servers running on port ${PORT}`)
    })
})
.catch((err) => {
    console.log ("MongoDB connection error", err)
})



/*
const PORT =  8001;

app.listen(PORT, () => {
 console.log(`Servers running on port ${PORT}`)
})
 */
  