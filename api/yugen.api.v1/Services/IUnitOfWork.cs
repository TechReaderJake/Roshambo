using yugen.api.v1.Services.Repositories;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace yugen.api.v1.Services
{
    /// <summary>
    /// Allows usage of the IBookRepository and can be extend to other objects
    /// to be saved in the database.
    /// </summary>
    public interface IUnitOfWork : IDisposable
    {
        IUserRepository Users { get;  }
        IBookRepository Books { get; }
        IWorldRepository Worlds { get; }
        IChapterRepository Chapters { get; }

        // Not Used Currently
        int Complete();
    }
}
