require('dotenv').config()
import app from './app'

app.listen(3001, () => {
    console.log(`⚡️ Server (${process.env.API_PORT}) is running`);
})