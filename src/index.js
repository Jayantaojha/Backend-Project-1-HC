import dotenv from 'dotenv'; 
import connectDB from "./db/index.js"; // Importing the function to connect to MongoDB
import { app } from './app.js'; 

dotenv.config({
    path: './env'
})

// Connecting to MongoDB using the imported function
connectDB()
.then(() => {
    // Starting the Express server
    app.listen(process.env.PORT || 8000, () => {
        console.log(`Server is running at PORT: ${process.env.PORT}`);
    })
})
.catch((error) => {
    console.log("MONGODB Connection Failed !!!", error);
})


/*
You're correct in noting that the connectDB() function itself doesn't explicitly return a promise that resolves or rejects. However, since it's an asynchronous function and it uses await inside, it implicitly returns a promise that resolves when all asynchronous operations inside it are completed successfully or rejects if an error occurs.

So, even though connectDB() doesn't explicitly return a promise, the then() and catch() methods can still be used because when you call an asynchronous function, it automatically wraps its return value (if any) in a promise.

*/
