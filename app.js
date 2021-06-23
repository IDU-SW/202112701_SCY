const express = require('express');
const bodyParser = require('body-parser');
const methodOverride = require('method-override');
const app = express();
app.use(bodyParser.json());
app.use(express.urlencoded({ extended: false }));
app.use(bodyParser.urlencoded({ extended: true }))
app.use(methodOverride('_method'));

const CafeRouter = require('./cafe/cafeRouter');
const BrandRouter = require('./brand/brandRouter');

app.set('views', __dirname + '/views');
app.set('view engine', 'ejs');

app.use("/cafe",CafeRouter);
app.use("/brand",BrandRouter);

console.log('listen 3000');
app.listen(3000);