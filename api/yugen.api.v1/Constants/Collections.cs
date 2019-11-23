using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace yugen.api.v1.Constants
{
    public class Collections
    {
        public const string WorldCollection = "worlds";
        public const string BookCollection = "books";
        
        public string[] DbCollections()
        {
            var _collections = new string[] { WorldCollection, BookCollection };
            return _collections;
        }
    }
}
