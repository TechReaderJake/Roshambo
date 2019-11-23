using System;
using System.Collections.Generic;
using System.Text;

namespace yugen.shared.exceptions
{
    /// <summary>
    /// Exception thrown when there are invalid arguments passed into an object.
    /// </summary>
    /// <exception cref="InvalidArguementException"></exception>
    public class InvalidArguementException : Exception
    {
        public InvalidArguementException() { }
        public InvalidArguementException(string msg)
            : base(msg) { }
        public InvalidArguementException(string msg, Exception inner)
            : base(msg, inner) { }
    }
}
