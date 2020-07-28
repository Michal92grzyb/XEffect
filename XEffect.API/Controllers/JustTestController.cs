using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using XEffect.API.Data;
using XEffect.API.Models;

namespace XEffect.API.Controllers
{
    [Route("[controller]")]
    public class JustTestController : ControllerBase
    {
        private readonly DataContext _context;
        public JustTestController(DataContext context)
        {
            _context = context;

        }

        [HttpGet]
        public async Task<IActionResult> GetValues()
        {
            var values = await _context.InitModels.ToListAsync();

            return Ok(values);
        }

        [HttpGet("{id}")]
        public async Task<IActionResult> Get(int id)
        {
            var value = await _context.InitModels.FirstOrDefaultAsync(x => x.Id == id);

            return Ok(value);
        }

        // [HttpPost]
        // public ActionResult<string> Post()
        // {
        //     return "ok";
        // }

        // [HttpPut]
        // public ActionResult<string> Put()
        // {
        //     return "ok";
        // }

        // [HttpDelete]
        // public ActionResult<string> Delete()
        // {
        //     return "ok";
        // }
    }
}