todocontrollers = require('../controllers/controllers')

router = (app) => {

    app.post("/todoApp/api/v1/todo", todocontrollers.createTodo)

    app.get("/todoApp/api/v1/todo/:id", todocontrollers.getTodoUsingId)

    app.get("/todoApp/api/v1/todo", todocontrollers.getAllTodo)
}

module.exports = router