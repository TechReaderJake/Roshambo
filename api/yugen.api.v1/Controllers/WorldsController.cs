using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using yugen.api.v1.Models;
using yugen.api.v1.Services;
using yugen.api.v1.Services.Api;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;

namespace yugen.api.v1.Controllers
{
    /// <summary>
    /// API controller for Worlds. Creates endpoints to send requests to
    /// to get data from or set data into the database. 
    /// Uses the UnitOfWork to decouple World CRUD operations.
    /// </summary>
    [Route("api/v1/[controller]")]
    //[Route("api/[controller]/[action]")]
    [ApiController]
    public class WorldsController : ControllerBase
    {
        private readonly UnitOfWork _work;
        public WorldsController(AppDbContext appdb)
        {
            _work = new UnitOfWork(appdb);
        }

        // GET: api/Worlds/5d7617ab1662733dd0d2927b
        [HttpGet("{id:length(24)}", Name = "GetByWorldId")]
        public ActionResult<WorldDTO> GetWorld(string id)
        {
            return _work.Worlds.Get(id);
        }

        // GET: api/Worlds
        [HttpGet]
        public ActionResult<List<WorldDTO>> GetWorlds()
        {
            return _work.Worlds.GetAll().ToList();
        }

        //// POST: api/Worlds
        //[HttpPost(Name = "AddWorld")]
        //public IActionResult AddWorld([FromBody] World book)
        //{
        //    _work.Worlds.Add(book);
        //    return NoContent();
        //}

        // POST: api/Worlds
        [HttpPost(Name = "AddWorlds")]
        public IActionResult AddWorlds([FromBody] IEnumerable<WorldDTO> books)
        {
            _work.Worlds.AddRange(books);
            return NoContent();
        }

        // PUT: api/Worlds/5
        [HttpPut("{id:length(24)}")]
        public IActionResult Put(string id, [FromBody] WorldDTO book)
        {
            _work.Worlds.Update(id, book);
            return NoContent();
        }

        //[HttpDelete(Name = "RemoveWorld")]
        //public IActionResult DeleteWorld(World rbook)
        //{
        //    _work.Worlds.Remove(rbook);
        //    return NoContent();
        //}

        [HttpDelete(Name = "RemoveWorlds")]
        public IActionResult DeleteWorlds(IEnumerable<WorldDTO> rbooks)
        {
            _work.Worlds.RemoveRange(rbooks);
            return NoContent();
        }

        [HttpDelete("{id:length(24)}")]
        public IActionResult DeleteById(string id)
        {
            _work.Worlds.Remove(id);
            return NoContent();
        }

        //[HttpDelete]
        //public IActionResult Delete(IEnumerable<string> ids)
        //{
        //    _work.Worlds.RemoveRange(ids);
        //    return NoContent();
        //}
    }
}
