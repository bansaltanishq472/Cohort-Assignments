/*
  Implement a class `Todo` having below methods
    - add(todo): adds todo to list of todos
    - remove(indexOfTodo): remove todo from list of todos
    - update(index, updatedTodo): update todo at given index
    - getAll: returns all todos
    - get(indexOfTodo): returns todo at given index
    - clear: deletes all todos

  Once you've implemented the logic, test your code by running
*/

class Todo {
    constructor() {
      this.arr = [];  
  }
  
  add(todo) {
    this.arr.push(todo);
  }

  remove(indexOfTodo) {
    this.arr.splice(indexOfTodo, 1);
  }

  update(index, updatedTodo) {
    if (index < this.arr.length) {
      this.arr[index] = updatedTodo;
    }
  }

  getAll() {
    return this.arr;
  }

  get(indexOfTodo) {
    if (indexOfTodo < this.arr.length) return this.arr[indexOfTodo];
    return null;
  }

  clear() {
    this.arr = [];
  }

}
 
const todo = new Todo();
todo.add("Task 1");
todo.add("Task 2");
console.log(todo.getAll());
module.exports = Todo;
