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
    /// Implementation of the Book Repository and inheriting from the Generic Repository.
    /// </summary>
    public class BookRepository : Repository<BookDTO, string>, IBookRepository
    {
        private const string Collection = "books";
        public BookRepository(AppDbContext context) : base(context, Collection)
        {}
        public IEnumerable<BookDTO> GetBooksByWorldId(string worldId)
        {
            return _context.Find(book => book.WorldId == worldId).ToList();
        }
    }
}
