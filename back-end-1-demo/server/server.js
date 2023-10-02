const express= require('express')

const app = express()
const cors = require('cors')

app.use(cors())
app.use(express.json())


const inventory = ['greeting card','wagon','computer','table','chair','basketball','game consol','Macy']

app.get('/api/inventory',(req,res) => {
    if(req.query.item){
        const filteredItems = inventory.filter(invItem => invItem.toLowerCase().includes(req.query.item.toLocaleLowerCase()))
        res.status(200).send(filteredItems)

    }else{
        res.status(200).send(inventory)


    }

});

app.get('/api/inventory/:id',(req,res)=>{
    res.status(200).send(inventory[+req.params.id])
})



app.listen(5050, ()=> console.log('Server running on 5050'))
