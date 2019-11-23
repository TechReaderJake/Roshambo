using System;
using System.Collections.Generic;
using System.Text;

namespace yugen.shared.domain
{
    public class FirstName : Name
    {
        public FirstName(string firstname) : base(firstname) { }
        public static implicit operator FirstName(string v)
        {
            return new FirstName(v);
        }

        public static implicit operator string(FirstName v)
        {
            return v.Value;
        }
    }
}
