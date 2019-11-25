using yugen.api.v1.Models;
using MongoDB.Bson;
using MongoDB.Driver;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace yugen.api.v1.Services.Repositories
{
    /// <summary>
    /// Implementation of the Chapter Repository and inheriting from the Generic Repository.
    /// </summary>
    public class ChapterRepository : Repository<ChapterDTO, string>, IChapterRepository
    {
        private const string Collection = "chapters";
        public ChapterRepository(AppDbContext context) : base(context, Collection)
        {
            /* 
             * If it is the first time creating the collection uncomment line below this block comment.
             * This line below will eventually have an if the collection hasn't been created to create it and 
             * seed the database with generic information. 
            */

            //context.DB().CreateCollection(Collection);
        }
        public IEnumerable<ChapterDTO> GetChaptersByBookId(string bookId)
        {
            return _context.Find(chapter => chapter.BookId == bookId).ToList();
        }
    }
}
