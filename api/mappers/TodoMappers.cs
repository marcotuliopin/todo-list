using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using api.dtos;
using api.models;

namespace api.mappers
{
    public static class TodoMappers
    {
        public static Todo ToTodoFromTodoDto(this TodoDto todoDto)
        {
            return new Todo
            {
                Content = todoDto.Content,
                Date = todoDto.Date
            };
        }

        public static TodoDto ToTodoDtoFromTodo(this Todo todo)
        {
            return new TodoDto
            {
                Content = todo.Content,
                Date = todo.Date
            };
        }
    }
}