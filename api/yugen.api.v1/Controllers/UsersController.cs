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
    /// API controller for Users. Creates endpoints to send requests to
    /// to get data from or set data into the database. 
    /// Uses the UnitOfWork to decouple User CRUD operations.
    /// </summary>
    [Route("api/v1/[controller]")]
    //[Route("api/[controller]/[action]")]
    [ApiController]
    public class UsersController : ControllerBase
    {
        private readonly UnitOfWork _work;
        public UsersController(AppDbContext appdb)
        {
            _work = new UnitOfWork(appdb);
        }

        // GET: api/Users/5d7617ab1662733dd0d2927b
        [HttpGet("{id:length(24)}", Name = "GetByUserId")]
        public ActionResult<UserDTO> GetUser(string id)
        {
            return _work.Users.Get(id);
        }

        // GET: api/Users
        [HttpGet]
        public ActionResult<List<UserDTO>> GetUsers()
        {
            return _work.Users.GetAll().ToList();
        }

        //// POST: api/Users
        //[HttpPost(Name = "AddUser")]
        //public IActionResult AddUser([FromBody] User user)
        //{
        //    _work.Users.Add(user);
        //    return NoContent();
        //}

        // POST: api/Users
        [HttpPost(Name = "AddUsers")]
        public IActionResult AddUsers([FromBody] IEnumerable<UserDTO> users)
        {
            _work.Users.AddRange(users);
            return NoContent();
        }

        // PUT: api/Users/5
        [HttpPut("{id:length(24)}")]
        public IActionResult Put(string id, [FromBody] UserDTO user)
        {
            _work.Users.Update(id, user);
            return NoContent();
        }

        //[HttpDelete(Name = "RemoveUser")]
        //public IActionResult DeleteUser(User ruser)
        //{
        //    _work.Users.Remove(ruser);
        //    return NoContent();
        //}

        [HttpDelete(Name = "RemoveUsers")]
        public IActionResult DeleteUsers(IEnumerable<UserDTO> rusers)
        {
            _work.Users.RemoveRange(rusers);
            return NoContent();
        }

        [HttpDelete("{id:length(24)}")]
        public IActionResult DeleteById(string id)
        {
            _work.Users.Remove(id);
            return NoContent();
        }

        //[HttpDelete]
        //public IActionResult Delete(IEnumerable<string> ids)
        //{
        //    _work.Users.RemoveRange(ids);
        //    return NoContent();
        //}
    }
}
