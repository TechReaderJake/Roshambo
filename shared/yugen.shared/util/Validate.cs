using System;
using yugen.shared.exceptions;

namespace yugen.shared.util
{
    /// <summary>
    ///  Validatation methods to help validate data for Value Objects, Domain Primitives, Entities, and more.
    /// </summary>
    public class Validate
    {
        public static string Trim(string value)
        {
            return value.Trim();
        }

        public static T NotNull<T>(T variable, string exception_message = "Value is null")
        {
            Log.Info("This is null");
            if (variable == null)
                throw new NullReferenceException(exception_message);
            return variable;
        }

        public static string StringLength(int startValue, int endValue, string value, string exception_message = "Not a valid String Length")
        {
            if (value.Length < startValue || value.Length > endValue)
                throw new InvalidStringLengthException(exception_message);
            return value;
        }

        public static string Value<T>(string value, string regex, string exception_message = "Not a valid Value")
        {
            if (!System.Text.RegularExpressions.Regex.IsMatch(value, regex))
                throw new InvalidValueException(exception_message);
            return value;
        }
    }
}
