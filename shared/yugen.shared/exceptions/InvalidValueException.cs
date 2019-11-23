using System;
using System.Collections.Generic;
using System.Text;

namespace yugen.shared.exceptions
{
    /// <summary>
    /// Exception thrown when there are values that don't fit within the data context.
    /// </summary>
    /// <exception cref="InvalidValueException"></exception>
    public class InvalidValueException : Exception
    {
        public InvalidValueException() { }
        public InvalidValueException(string msg)
            : base(msg) { }
        public InvalidValueException(string msg, Exception inner)
            : base(msg, inner) { }
    }
}