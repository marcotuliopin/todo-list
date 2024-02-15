using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using api.data;
using api.dtos;
using api.helpers;
using api.interfaces;
using api.mappers;
using api.models;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;

namespace api.controllers
{
    [Route("api/[controller]/[action]")]
    [ApiController]
    public class TodoController : ControllerBase
    {
        private readonly ApplicationDBContext _context;
        private readonly ITodoRepository _repo;

        public TodoController(ApplicationDBContext context, ITodoRepository repo)
        {
            _context = context;
            _repo = repo;
        }

        [HttpGet]
        public async Task<IActionResult> GetAll([FromQuery] QueryObject query)
        {
            var todos = await _repo.GetAllAsync(query);

            var todoDtos = todos.Select(x => x.ToTodoDtoFromTodo()).ToList(); 

            return Ok(todoDtos);
        }

        [HttpGet("{id:int}")]
        public async Task<IActionResult> GetById([FromRoute] int id)
        {
            var todo = await _repo.GetByIdAsync(id);
            if (todo == null)
                return NotFound();
            return Ok(todo.ToTodoDtoFromTodo());
        }

        [HttpPost]
        public async Task<IActionResult> Create([FromBody] TodoDto createDto)
        {
            var todoModel = createDto.ToTodoFromTodoDto();
            await _repo.CreateAsync(todoModel);
            return CreatedAtAction(nameof(GetById), new { id = todoModel.Id }, todoModel);
        }

        [HttpPut]
        [Route("{id:int}")]
        public async Task<IActionResult> Update([FromRoute] int id, [FromBody] TodoDto updateDto)
        {
            var todoModel = await _repo.UpdateAsync(id, updateDto);
            if (todoModel == null)
                return NotFound();
            return Ok(todoModel);
        }

        [HttpDelete]
        [Route("{id:int}")]
        public async Task<IActionResult> Delete([FromRoute] int id)
        {
            var todoModel = await _repo.DeleteAsync(id);
            if (todoModel == null)
                return NotFound();
            return NoContent();
        }
    }
}