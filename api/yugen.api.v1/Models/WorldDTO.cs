using MongoDB.Bson;
using MongoDB.Bson.Serialization.Attributes;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using yugen.api.v1.Services.Repositories;

namespace yugen.api.v1.Models
{
    public class WorldDTO : IEntity<string>
    {
        [BsonId]
        [BsonRepresentation(BsonType.ObjectId)]
        public string Id { get; set; }
        [BsonRepresentation(BsonType.ObjectId)]
        [BsonElement("userId")]
        public string UserId { get; set; }
        [BsonElement("title")]
        public string Title { get; set; }
        [BsonElement("created")]
        public DateTime Created { get; set; }
        [BsonElement("modified")]
        public DateTime Modified { get; set; }
    }
}
