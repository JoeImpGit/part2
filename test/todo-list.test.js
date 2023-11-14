import { Task, TodoList } from '../logic/todo-list.js'

describe('To-do list functionality', () => {

  it('should correctly add a single new task to the to-do list', () => {
    // Arrange
    const todoList = new TodoList()
    const newTask = new Task('Test task')

    // Act
    todoList.addTask(newTask)
    
    // Assert
    // 💡 Tip: use toEqual() to compare arrays and objects, and toBe() to compare primitive values (like numbers or booleans)
    expect(todoList.tasks).toEqual([newTask])
  })

  it('should correctly add multiple new tasks to the to-do list', () => {
    const todoList = new TodoList()
    const testTask1 = new Task('Test task 1')
    const testTask2 = new Task('Test task 2')

    todoList.addTask(testTask1)
    todoList.addTask(testTask2)

    expect(todoList.tasks).toEqual([testTask1, testTask2])
  })

  it('should not add a task to a list if the task has no name', () => {
    // 🎯 implement test here
    //Arrange
    const todoList = new TodoList()
    const testTask = new Task('')
    //Act
    todoList.addTask(testTask)
    //Assert
    expect(todoList.tasks).toEqual([])
  })

  it('should correctly toggle the completion status of a task', () => {
    // 🎯 implement test here
    //Arrange
    const testTask = new Task('Task 1')
    expect(testTask.isComplete).toBe(false)
    //Act
    testTask.toggleCompletion()
    expect(testTask.isComplete).toBe(true)
    testTask.toggleCompletion()
    expect(testTask.isComplete).toBe(false)
  })

  it('should correctly delete a task from a to-do list', () => {
    // 🎯 implement test here
    const todoList = new TodoList()
    const testTask1 = new Task('Task1')
    const testTask2 = new Task('Task2')
    todoList.addTask(testTask1)
    todoList.addTask(testTask2)
    todoList.deleteTask(testTask2)
    expect(todoList.tasks).toEqual([testTask1])
  })

  it('should count the correct toal number of tasks in a to-do list', ()=>{
    const todoList = new TodoList()
    todoList.addTask(new Task('1'))
    todoList.addTask(new Task('2'))
    todoList.addTask(new Task('3'))
    todoList.addTask(new Task('4'))
    const tasksCount = todoList.countTotalTasks()
    expect(tasksCount).toBe(4)
  })
  it('should count the correct total number of tasks in the todo list that are incomplete',()=>{
    const todoList = new TodoList()
    todoList.addTask(new Task('1',true))
    todoList.addTask(new Task('2',false))
    todoList.addTask(new Task('3',false))
    todoList.addTask(new Task('4',false))
    const countIncompleteTasksCount = todoList.countIncompleteTasks()
    expect(countIncompleteTasksCount).toBe(3)
  })
  it('should count the correct total number of tasks in the todo list that are complete',()=>{
    const todoList = new TodoList()
    todoList.addTask(new Task('1',true))
    todoList.addTask(new Task('2',false))
    todoList.addTask(new Task('3',false))
    todoList.addTask(new Task('4',false))
    const countcompleteTasksCount = todoList.countCompleteTasks()
    expect(countcompleteTasksCount).toBe(1)
  })
  it('Should return true if all the tasks have been completed',()=>{
    const todoList = new TodoList()
    todoList.addTask(new Task('1',true))
    todoList.addTask(new Task('2',true))
    todoList.addTask(new Task('3',true))
    todoList.addTask(new Task('4',true))
    const checkentirelistcomplete = todoList.checkIsEntireListComplete()
    expect(checkentirelistcomplete).toBe(true)
  })
  it('should determine if the list is empty',()=>{
    const todoList = new TodoList()
    const checkentirelistcomplete = todoList.checkIsEntireListComplete()
    expect(checkentirelistcomplete).toBe(false)
  })
  it('should determine if it contains incomplete tasks',()=>{
    const todoList = new TodoList()
    todoList.addTask(new Task('1',true))
    todoList.addTask(new Task('2',true))
    todoList.addTask(new Task('3',true))
    todoList.addTask(new Task('4',false))
    const checkentirelistcomplete = todoList.checkIsEntireListComplete()
    expect(checkentirelistcomplete).toBe(false)
  })
})