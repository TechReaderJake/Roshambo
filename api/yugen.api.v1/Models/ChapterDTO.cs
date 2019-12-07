using yugen.api.v1.Services.Repositories;
using MongoDB.Bson;
using MongoDB.Bson.Serialization.Attributes;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace yugen.api.v1.Models
{
    /// <summary>
    /// Book DTO object for the API to use.
    /// </summary>
    /// <example>var book = new Book();</example>
    public class ChapterDTO : IEntity<string>
    {
        [BsonId]
        [BsonRepresentation(BsonType.ObjectId)]
        public string Id { get; set; }

        [BsonRepresentation(BsonType.ObjectId)]
        [BsonElement("bookId")]
        public string BookId { get; set; }

        [BsonElement("name")]
        public string Name { get; set; }

        [BsonElement("content")]
        public string Content { get; set; }

        [BsonElement("created")]
        public DateTime Created { get; set; }
        [BsonElement("modified")]
        public DateTime Modified { get; set; }

    }
}
