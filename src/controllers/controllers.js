const todo = require('../schema/userschema')

exports.createTodo = async (req, res) => {
    
    // To adding the todo in mongodb online
    todo_object = req.body
    await todo.create(todo_object) // creating and adding the todo into mongodb atalas

    res.status(201).send(todo_object)
}

exports.getTodoUsingId = async (req, res) => {

    todo_id = req.param.id // get id
    if(todo.todo_id){
        await res.status(200).send(todo.todo_id)
    }
    else{
        res.status(404).send({
            message : "Todo is not exist"
        })
    }
}

exports.getAllTodo = (req, res) => {
    
    res.status(200).send(todo)

}