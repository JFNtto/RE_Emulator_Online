const express = require('express')
const app = express()

const path = require('path')

app.use(express.static(path.join(__dirname, 'src')))//ver nome depois

app.get('/', (req, res)=>{
    res.sendFile(path.join(__dirname, 'src/html/index.html'))
})

//resident evil 3

app.get('/residentEvil3', (req, res)=>{
    res.sendFile(path.join(__dirname, 'src/html/novaTelaRe3.html'))
})

//resident evil 2

app.get('/residentEvil2', (req, res)=>{
    const disco = req.query.disco
    if(disco === "1")
        res.redirect("/residentEvil2/disco_1")
    else
        res.redirect("/residentEvil2/disco_2")   
})

app.get("/residentEvil2/disco_1", (req, res) => {
  res.sendFile(path.join(__dirname, 'src/html/novaTelaRe2D1.html'))
});

app.get("/residentEvil2/disco_2", (req, res) => {
  res.sendFile(path.join(__dirname, 'src/html/novaTelaRe2D2.html'))
});

//resident evil 1

app.get('/residentEvil', (req, res)=>{
    res.sendFile(path.join(__dirname, 'src/html/novaTelaRe1.html'))
})

const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
    console.log(`Servidor ligado na porta ${PORT}`);
});
