using System;
using System.Collections.Generic;
using System.Text;
using yugen.shared.exceptions;

namespace yugen.shared.domain
{
    /// <summary>
    /// Description is for anything that needs a description.
    /// </summary>
    /// <example>
    /// Characters, Assets, Scenes, Book, etc.
    /// </example>
    // Rules: 
    //  Cannot start with a number.
    //  Only alphabet characters and numerical
    //  Min length 10 characters
    //  Max length 255 characters
    public class Description
    {
        private static readonly int MINIMUM_LENGTH = 10;
        private static readonly int MAXIMUM_LENGTH = 255;
        private static readonly string VALID_CHARACTERS = "[A-Za-z0-9_-]+";

        public Description(string v)
        {
            if (v != null)
            {
                string trimmed = v.Trim();
                if (trimmed.Length < MINIMUM_LENGTH || trimmed.Length > MAXIMUM_LENGTH)
                {
                    throw new InvalidStringLengthException("Not valid length for a title.");
                }

                if (!System.Text.RegularExpressions.Regex.IsMatch(trimmed, VALID_CHARACTERS))
                {
                    throw new InvalidValueException("Not valid characters in the title.");
                }
                Value = trimmed;
            }
            else throw new NullReferenceException("The value is null.");
        }


        public string Value { get; private set; }

        public static implicit operator Description(string v)
        {
            return new Description(v);
        }

        public static implicit operator string(Description v)
        {
            return v.Value;
        }
    }
}
