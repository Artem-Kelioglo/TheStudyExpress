import express, { application } from 'express';
import path from 'path';
import { requestTime, logger } from "./middwlwares.js";
import serverRoutes from "./routes/servers.js"

const __dirname=path.resolve()


const PORT=  process.env.PORT ?? 3000  
const app = express();

app.set('view engine', 'ejs')
// console.log(app.get('view engine'))
app.set('views',path.resolve(__dirname, 'ejs'))
// console.log(app.get('views'))

app.use(express.static(path.resolve(__dirname, 'static')))
app.use(express.json())
app.use(express.urlencoded({extended:false}))
app.use(requestTime)
app.use(logger)

app.use(serverRoutes)

app.get('/', function (req, res) {
  res.render('index', { title: 'main page', active:'main'})

})

app.get('/features', function (req, res) {
  res.render('features',{title:'features page',active:'features'})
  
})

// app.get('/', (req,res) => {
// //  res.send('<h1>Hello Express!</h1>') 
//   res.sendFile(path.resolve(__dirname, 'static','index.html'));
// })

// app.get('/features', (req,res) => {
 
//     res.sendFile(path.resolve(__dirname, 'static','features.html'));
// })

// app.get('/download', (req,res) => {
//  console.log(req.requestTime)
//   res.download(path.resolve(__dirname, 'static','index.html'));
// })


  


app.listen(PORT, () => {
  console.log(`server has been started on port ${PORT}...`)
})
