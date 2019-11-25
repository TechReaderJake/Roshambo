using yugen.api.v1.Models;
using MongoDB.Bson;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace yugen.api.v1.Services.Repositories
{
    /// <summary>
    /// Extends the generic CRUD Repository and 
    /// allows adding specific methods for the object that needs implemented.
    /// </summary>
    public interface IChapterRepository : IRepository<ChapterDTO, string>
    {
        IEnumerable<ChapterDTO> GetChaptersByBookId(string id);
    }
}
