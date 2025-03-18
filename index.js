const express =require('express');
const app = express();
app.use(express.static('build'));
const port =8083;
app.listen(port,()=>{
  console.log(`Server running at http://localhost:${port}/`);
})
