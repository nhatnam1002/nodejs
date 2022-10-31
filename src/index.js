const express = require('express')
const morgan = require('morgan')
const { engine } = require ('express-handlebars');

const app = express()

const sass = require('sass');

const port = 3000
const path = require('path')


app.use(express.static(path.join(__dirname, 'public')))
//morgan 
app.use(morgan('combined'))
//handlebars
app.engine('hbs', engine({
  extname : "hbs",
 
}))
var viewPath = path.join(__dirname, 'resources\\views');
app.set('views', viewPath);


app.set('view engine','hbs')
//route
app.get('/home', (req, res) => {
  res.render('home')
})

app.get('/news', (req, res) => {
  res.render('news')
})
/*
app.get('/', (req, function(req, res)){
  return res.send('Hello World!')
})
*/

// 127.0.0.1 -- localhost

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})