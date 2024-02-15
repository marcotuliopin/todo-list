using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using api.data;
using api.dtos;
using api.helpers;
using api.interfaces;
using api.models;
using Microsoft.EntityFrameworkCore;

namespace api.repositories
{
    public class TodoRepository : ITodoRepository
    {
        private readonly ApplicationDBContext _context;

        public TodoRepository(ApplicationDBContext context)
        {
            _context = context;
        }

        public async Task<Todo> CreateAsync(Todo todoModel)
        {
            await _context.Todos.AddAsync(todoModel);
            await _context.SaveChangesAsync();
            return todoModel;
        }

        public async Task<Todo?> DeleteAsync(int id)
        {
            var todoModel = await _context.Todos.FirstOrDefaultAsync(x => x.Id == id);

            if (todoModel == null)
                return null;

            _context.Todos.Remove(todoModel);
            await _context.SaveChangesAsync();
            return todoModel;
        }

        public async Task<List<Todo>> GetAllAsync(QueryObject query)
        {
            var todos = _context.Todos.AsQueryable();
            
            todos = todos.OrderBy(x => x.Date);

            var skipNum = (query.PageNumber - 1) * query.PageSize;

            return await todos.Skip(skipNum).Take(query.PageSize).ToListAsync();
        }

        public async Task<Todo?> GetByIdAsync(int id)
        {
            return await _context.Todos.FindAsync(id);
        }

        public async Task<Todo?> UpdateAsync(int id, TodoDto updateDto)
        {
            var todoModel = await _context.Todos.FirstOrDefaultAsync(x => x.Id == id);

            if (todoModel == null)
                return null;

            todoModel.Content = updateDto.Content;
            todoModel.Date = updateDto.Date;
            await _context.SaveChangesAsync();
            return todoModel;
        }
    }
}