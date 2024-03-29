const express = require('express')
const cors = require('cors')

const {getMovies, createMovie, updateMovie, deleteMovie} = require('./controller')

const app = express()

app.use(express.json())
app.use(cors())

app.get('/api/movies', getMovies)
app.post('/api/movies', createMovie)
app.put('/api/movies/:id', updateMovie)
app.delete('/api/movies/:id', deleteMovie)

app.listen(4004, () => {
console.log(`docked on 4004`)
})