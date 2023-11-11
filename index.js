const express=require('express');
const app=express();
require ('./database.js');
console.log('app started on port 3400');

// try and see if this works
const users = await User.findAndCountAll({
    order: [['createdAt', 'DESC'], ['firstName', 'ASC']],
    offset: (page - 1) * limit,
    limit,
  });

app.listen(3400);
