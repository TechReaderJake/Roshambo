using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using yugen.api.v1.Models;

namespace yugen.api.v1.Services.Repositories
{
    public interface IUserRepository : IRepository<UserDTO, string>
    {
    }
}
