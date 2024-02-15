using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using api.dtos;
using api.helpers;
using api.models;

namespace api.interfaces
{
    public interface ITodoRepository
    {
        Task<List<Todo>> GetAllAsync(QueryObject query);
        Task<Todo?> GetByIdAsync(int id);
        Task<Todo> CreateAsync(Todo todoModel);
        Task<Todo?> UpdateAsync(int id, TodoDto updateDto);
        Task<Todo?> DeleteAsync(int id);
    }
}