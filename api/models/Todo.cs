using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace api.models
{
    public class Todo
    {
        public int Id { get; set; }
        public string Content { get; set; } = string.Empty;
        public DateTime Date { get; set; } = DateTime.Now;
    }
}