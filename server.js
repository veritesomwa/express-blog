const express = require('express')
const app = express()
const PORT = process.env.PORT || 3000




app.get('/', (res, req) => {
    req.send('Hello World!')
})

app.listen(PORT, ()=> console.log(`Listening to port ${PORT}`))