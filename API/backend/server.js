import express from 'express'
import cors from 'cors'

const app = express()
const port = 5000
app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.get('/api/jokes', (req, res) => {
    const jokes = [
        "Why don't scientists trust atoms? Because they make up everything!",
        "Why did the scarecrow win an award? Because he was outstanding in his field!",
        "Why don't skeletons fight each other? They don't have the guts!"
    ]
    res.json(jokes)
})
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
