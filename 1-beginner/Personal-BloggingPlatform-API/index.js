const express = require('express');
require('dotenv').config();
const core = require('cors');


const App = express();

App.use(core());
App.use(express.json());


App.get('/', (req, res) => {
   res.json({message:'Personal Blogging Platform APi is runningxxxxxxxxxxx'})
})


const PORT = process.env.PORT || 3000;
App.listen(PORT, () => {
    console.log(`server running on port ${PORT}`);
})
