using System;
using System.Collections.Generic;
using System.Text;

namespace yugen.shared.exceptions
{
    /// <summary>
    /// Exception thrown when there are values of a length outside what is intended.
    /// </summary>
    /// <exception cref="InvalidStringLengthException"></exception>
    public class InvalidStringLengthException : Exception
    {
        public InvalidStringLengthException() { }
        public InvalidStringLengthException(string msg)
            : base(msg) { }
        public InvalidStringLengthException(string msg, Exception inner)
            : base(msg, inner) { }
    }
}
