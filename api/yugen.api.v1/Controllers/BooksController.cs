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
    /// API controller for Books. Creates endpoints to send requests to
    /// to get data from or set data into the database. 
    /// Uses the UnitOfWork to decouple Book CRUD operations.
    /// </summary>
    [Route("api/v1/[controller]")]
    //[Route("api/[controller]/[action]")]
    [ApiController]
    public class BooksController : ControllerBase
    {
        private readonly UnitOfWork _work;
        public BooksController(AppDbContext appdb)
        {
            _work = new UnitOfWork(appdb);
        }

        //// GET: api/Books/5d7617ab1662733dd0d2927b
        //[HttpGet("{id:length(24)}", Name = "GetByBookId")]
        //public ActionResult<BookDTO> GetBook(string id)
        //{
        //    return _work.Books.Get(id);
        //}

        [HttpGet("{id:length(24)}", Name = "GetBooksByWorldId")]
        public ActionResult<List<BookDTO>> GetBooksByWorldId(string id)
        {
            return _work.Books.GetBooksByWorldId(id).ToList();
        }

        // GET: api/Books
        [HttpGet]
        public ActionResult<List<BookDTO>> GetBooks()
        {
            return _work.Books.GetAll().ToList();
        }

        //// POST: api/Books
        //[HttpPost(Name = "AddBook")]
        //public IActionResult AddBook([FromBody] Book book)
        //{
        //    _work.Books.Add(book);
        //    return NoContent();
        //}

        // POST: api/Books
        [HttpPost(Name = "AddBooks")]
        public IActionResult AddBooks([FromBody] IEnumerable<BookDTO> books)
        {
            _work.Books.AddRange(books);
            return NoContent();
        }

        // PUT: api/Books/5
        [HttpPut("{id:length(24)}")]
        public IActionResult Put(string id, [FromBody] BookDTO book)
        {
            _work.Books.Update(id, book);
            return NoContent();
        }

        //[HttpDelete(Name = "RemoveBook")]
        //public IActionResult DeleteBook(Book rbook)
        //{
        //    _work.Books.Remove(rbook);
        //    return NoContent();
        //}

        [HttpDelete(Name = "RemoveBooks")]
        public IActionResult DeleteBooks(IEnumerable<BookDTO> rbooks)
        {
            _work.Books.RemoveRange(rbooks);
            return NoContent();
        }

        [HttpDelete("{id:length(24)}")]
        public IActionResult DeleteById(string id)
        {
            _work.Books.Remove(id);
            return NoContent();
        }

        //[HttpDelete]
        //public IActionResult Delete(IEnumerable<string> ids)
        //{
        //    _work.Books.RemoveRange(ids);
        //    return NoContent();
        //}
    }
}
