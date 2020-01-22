using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using yugen.api.v1.Models;

namespace yugen.api.v1.Services.Repositories
{
    /// <summary>
    /// Implementation of the User Repository and inheriting from the Generic Repository.
    /// </summary>
    public class UserRepository : Repository<UserDTO, string>, IUserRepository
    {
        private const string Collection = "users";
        public UserRepository(AppDbContext context) : base(context, Collection)
        {

        }
    }
}
