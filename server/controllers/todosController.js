const todosModel = require('../models/todosModel')
class TodosController {
    async getTodos (req, res) {
        try {
            const todos = await todosModel.find({}, "title")
            res.status(200).json({ todos: todos })
        } catch (e) {
            res.status(400).json({ message: e.message })
        }
    }

    async addTodo (req, res) {
        try {
            if (!req.body.title) {
                res.status(400).json({ message: 'Пожалуйста, добавьте заголовок' })
                return
            }

            const todoModel = new todosModel({ title: req.body.title })

            await todoModel.save()

            res.status(200).json({ message: 'Элемент успешно добавлен' })

        } catch (e) {
            res.status(400).json({ message: 'Произошла ошибка при добавлении' })
        }
    }

    async deleteTodo (req, res) {
        try {
            if (!req.body.title) {
                res.status(400).json({ message: 'Пожалуйста, добавьте заголовок' })
                return
            }

            const { deletedCount } = await todosModel.deleteOne({ title: req.body.title })

            if (deletedCount === 0) {
                res.status(400).json({ message: 'Удаление не произошло. Пожалуйста, проверьте заголовок' })
                return
            }
            res.status(200).json({ message: 'Элемент успешно удален'})

        } catch (e) {
            res.status(400).json({ message: 'Произошла ошибка при удалении' })
        }
    }

    async editTodo (req, res) {
        try {
            const todoId = req.body._id
            const newTodoTitle = req.body.title
            const oldTodo = await todosModel.findById(todoId)

            if (newTodoTitle === oldTodo.title) {
                res.status(400).json({ message: 'Редактирования не произошло, т. к. не было изменений' })
                return
            }

            await todosModel.findByIdAndUpdate(todoId, { title: newTodoTitle })

            res.status(200).json({ message: 'Элемент успешно отредактирован'})
        } catch (e) {
            res.status(400).json({ message: 'Произошла ошибка при редактировании' })
        }
    }
}

module.exports = new TodosController()