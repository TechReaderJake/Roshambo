using System;
using System.Collections.Generic;
using System.Text;

namespace yugen.shared.domain
{
    public class LastName : Name
    {
        public LastName(string lastname) : base(lastname) { }
        public static implicit operator LastName(string v)
        {
            return new LastName(v);
        }

        public static implicit operator string(LastName v)
        {
            return v.Value;
        }
    }
}
