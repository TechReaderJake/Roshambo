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
    /// API controller for Chapters. Creates endpoints to send requests to
    /// to get data from or set data into the database. 
    /// Uses the UnitOfWork to decouple Chapter CRUD operations.
    /// </summary>
    [Route("api/v1/[controller]")]
    //[Route("api/[controller]/[action]")]
    [ApiController]
    public class ChaptersController : ControllerBase
    {
        private readonly UnitOfWork _work;
        public ChaptersController(AppDbContext appdb)
        {
            _work = new UnitOfWork(appdb);
        }

        //// GET: api/Chapters/5d7617ab1662733dd0d2927b
        //[HttpGet("{id:length(24)}", Name = "GetByChapterId")]
        //public ActionResult<ChapterDTO> GetChapter(string id)
        //{
        //    return _work.Chapters.Get(id);
        //}

        [HttpGet("{id:length(24)}", Name = "GetChaptersByChapterId")]
        public ActionResult<List<ChapterDTO>> GetChaptersByChapterId(string id)
        {
            return _work.Chapters.GetChaptersByBookId(id).ToList();
        }

        // GET: api/Chapters
        [HttpGet]
        public ActionResult<List<ChapterDTO>> GetChapters()
        {
            return _work.Chapters.GetAll().ToList();
        }

        //// POST: api/Chapters
        //[HttpPost(Name = "AddChapter")]
        //public IActionResult AddChapter([FromBody] Chapter book)
        //{
        //    _work.Chapters.Add(book);
        //    return NoContent();
        //}

        // POST: api/Chapters
        [HttpPost(Name = "AddChapters")]
        public IActionResult AddChapters([FromBody] IEnumerable<ChapterDTO> chapters)
        {
            _work.Chapters.AddRange(chapters);
            return NoContent();
        }

        // PUT: api/Chapters/5
        [HttpPut("{id:length(24)}")]
        public IActionResult Put(string id, [FromBody] ChapterDTO book)
        {
            _work.Chapters.Update(id, book);
            return NoContent();
        }

        //[HttpDelete(Name = "RemoveChapter")]
        //public IActionResult DeleteChapter(Chapter rbook)
        //{
        //    _work.Chapters.Remove(rbook);
        //    return NoContent();
        //}

        [HttpDelete(Name = "RemoveChapters")]
        public IActionResult DeleteChapters(IEnumerable<ChapterDTO> rchapters)
        {
            _work.Chapters.RemoveRange(rchapters);
            return NoContent();
        }

        [HttpDelete("{id:length(24)}")]
        public IActionResult DeleteById(string id)
        {
            _work.Chapters.Remove(id);
            return NoContent();
        }

        //[HttpDelete]
        //public IActionResult Delete(IEnumerable<string> ids)
        //{
        //    _work.Chapters.RemoveRange(ids);
        //    return NoContent();
        //}
    }
}
