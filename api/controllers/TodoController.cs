using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using api.data;
using api.dtos;
using api.mappers;
using api.models;
using Microsoft.AspNetCore.Mvc;

namespace api.controllers
{
    [Route("api/todo")]
    [ApiController]
    public class TodoController : ControllerBase
    {
        private readonly ApplicationDBContext _context;
        public TodoController(ApplicationDBContext context)
        {
            _context = context;
        }

        [HttpGet]
        public IActionResult GetAll()
        {
            var todos = _context.Todos.ToList();
            return Ok(todos);
        }

        [HttpGet("{id}")]
        public IActionResult GetById([FromRoute] int id)
        {
            var todo = _context.Todos.Find(id);

            if (todo == null)
                return NotFound();

            return Ok(todo);
        }

        [HttpPost]
        public IActionResult Create([FromBody] CreateTodoRequestDto todoDto)
        {
            var todoModel = todoDto.ToTodoFromCreateDto();
            _context.Todos.Add(todoModel);
            _context.SaveChanges();
            return CreatedAtAction(nameof(GetById), new { id = todoModel.Id }, todoModel);
        }
    }
}