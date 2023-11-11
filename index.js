const express=require('express');
const app=express();
require ('./database.js');
console.log('app started on port 3400');
app.listen(3400);
