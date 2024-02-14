using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace api.helpers
{
    public class QueryObject
    {
        public string? Content { get; set; } = null;
        public string? Date { get; set; } = null;
        public string? SortBy { get; set; } = null;

        public int PageNumber {get; set;} = 1; 
        public int PageSize {get; set;} = 20;
    }
}