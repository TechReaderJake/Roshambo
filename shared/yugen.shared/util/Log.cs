using System;
using System.Collections.Generic;
using System.Text;

namespace yugen.shared.util
{
    /// <summary>
    ///  Logging infomation, warnings, errors, fatals, and debugs
    /// </summary>
    public class Log
    {
        enum LogLevel { Debug, Info, Warn, Error, Fatal }
        public static void Info<T>(T msg)
        {
            Console.WriteLine("Value: " + msg);
        }

        public void Warn<T>(T msg)
        {
            Console.WriteLine("Value: " + msg);
        }

        public void Fatal<T>(T msg)
        {
            Console.WriteLine("Value: " + msg);
        }

        public void Error<T>(T msg)
        {
            Console.WriteLine("Value: " + msg);
        }

        public void Debug<T>(T msg)
        {
            Console.WriteLine("Value: " + msg);
        }
    }
}
