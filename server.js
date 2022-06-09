const express = require('express')
const app = express()
const cors = require('cors')
const PORT = 8000

app.use(cors())

const tea = {
    'oolang': {
        'type': 'black',
        'origin': 'Yo mommas house',
        'waterTemp': 200,
        'steepTimeSeconds': 180,
        'caffinated': true,
        'flavor': 'delicious'
    },
    'matcha': {
        'type': 'green',
        'origin': 'Yo mommas house',
        'waterTemp': 200,
        'steepTimeSeconds': 180,
        'caffinated': false,
        'flavor': 'delicious'
    },
    'unknown': {
        'tpye': 'unknown',
        'origin': 'unknown',
        'waterTemp': 0,
        'steepTimeSeconds': 0,
        'caffinated': 'unknown',
        'flavor': 'unknown'
    }
}

app.get('/', (req, res) => {
    res.sendFile(__dirname + '/index.html')
})

app.get('/api/:teaName', (req, res) => {
    const teaName = req.params.teaName.toLowerCase()
    if(tea[teaName]) {
        res.json(tea[teaName])
    } else {
        res.json(tea['unknown'])
    }
})



app.listen(process.env.PORT || PORT, () => {
    console.log(`server is running on port ${PORT}, better go catch it!`)
})