const express = require('express');
const app = express();

app.listen(4000);

let authUser = express.Router();
app.use('/auth',authUser);
authUser
.route('/signup')
.post(postUser)

function postUser(req,res){
  
}