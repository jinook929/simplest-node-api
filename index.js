const express = require('express');
const app = express();
const PORT = 8080;

app.use(express.json())

app.get('/', (req, res) => {
    res.status(200).send({
        greeting: "Hello World!",
        backend: "Node.js"
    })
});

app.post('/posts/:id', (req, res) => {
    const {id} = req.params;
    const {logo} = req.body;
    console.log(req.body)

    if(!logo) {
        res.status(418).send({messege: 'We need a logo!'})
    } else {
        res.status(200).send({id, logo})
    }

})

app.listen(
    PORT, 
    () => console.log(`It's alive on http://localhost:${PORT}`)
)