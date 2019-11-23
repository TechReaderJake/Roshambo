using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace yugen.api.v1.Services
{
    /// <summary>
    /// Implementation of the IDatabaseSettings to actually use the DatabaseSettings.
    /// </summary>
    public class DatabaseSettings : IDatabaseSettings
    {
        public string ConnectionString { get; set; }
        public string DatabaseName { get; set; }
        public bool SeedDb { get; set; }
    }
}
