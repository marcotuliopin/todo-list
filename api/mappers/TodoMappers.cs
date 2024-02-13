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
        public static Todo ToTodoFromCreateDto(this CreateTodoRequestDto todoDto)
        {
            return new Todo
            {
                Content = todoDto.Content,
                Date = todoDto.Date
            };
        }
    }
}