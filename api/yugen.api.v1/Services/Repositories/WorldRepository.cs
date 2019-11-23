using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using yugen.api.v1.Models;

namespace yugen.api.v1.Services.Repositories
{
    public class WorldRepository : Repository<WorldDTO, string>, IWorldRepository
    {
        private const string Collection = "worlds";
        public WorldRepository(AppDbContext context) : base(context, Collection)
        {

        }
    }
}
