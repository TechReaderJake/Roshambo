using MongoDB.Driver;
using Newtonsoft.Json;
using System;
using System.Collections.Generic;
using System.IO;
using System.Linq;
using System.Threading.Tasks;
using yugen.api.v1.Models;

namespace yugen.api.v1.Migrations
{
    /// <summary>
    /// Will eventuallly be used to seed the database.
    /// </summary>
    public class Migration
    {
        private MongoDB.Driver.MongoClient _client;
        private string _dbname;
        private IMongoDatabase _db;

        //private List<WorldDTO> worlds;
        //private List<BookDTO> books;

        public Migration(MongoDB.Driver.MongoClient client, string dbname)
        {
            _client = client;
            _dbname = dbname;
        }

        public IMongoDatabase Create()
        {
            _db = _client.GetDatabase(_dbname);
            InsertData<WorldDTO>("worlds");
            InsertData<BookDTO>("books");
            InsertData<ChapterDTO>("chapters");
            InsertData<UserDTO>("users");
            return _db;
        }

        private void InsertData<T>(string inputFileName)
        {
            _db.DropCollection(inputFileName);
            _db.CreateCollection(inputFileName);
            var collection = _db.GetCollection<T>(inputFileName);
            using (var streamReader = new StreamReader("Migrations/" + inputFileName + ".json"))
            {
                string json = streamReader.ReadToEnd();
                List<T> items = JsonConvert.DeserializeObject<List<T>>(json);
                collection.InsertMany(items);
            }
        }
    }
}
