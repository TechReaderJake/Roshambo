using yugen.api.v1.Services;
using MongoDB.Driver;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using yugen.api.v1.Migrations;

namespace yugen.api.v1.Models
{
    /// <summary>
    /// Database Context used for the API. Receives database settings interface.
    /// </summary>
    public class AppDbContext
    {
        private readonly IMongoDatabase _db;
        public AppDbContext(IDatabaseSettings settings)
        {
            var setting = settings ?? throw new ArgumentNullException("Settings");
            var client = new MongoClient(setting.ConnectionString);
            if (setting.SeedDb)
            {
                var migrate = new Migration(client, setting.DatabaseName);
                _db = migrate.Create();
            }
            else
            {
                _db = client.GetDatabase(setting.DatabaseName);
            }
        }

        public IMongoDatabase DB()
        {
            return _db;
        }
    }
}
