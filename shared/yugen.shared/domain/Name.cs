using System;
using System.Collections.Generic;
using System.Text;
using yugen.shared.exceptions;
using yugen.shared.util;

namespace yugen.shared.domain
{
    /// <summary>
    /// Name is used for naming a value.
    /// </summary>
    /// <example>
    /// First Name, Last Name, Description Title, Category Name, Chapter Name.
    /// </example>
    // Rules: 
    //  Cannot start with a number
    //  Only contain alphabet characters
    //  Cannot be shorter than 1 characters
    //  Cannot be longer than 70 characters
    //  Cannot have the @ symbol or special characters \t \n etc.
    public class Name : ValueObject<Name>
    {
        private static readonly int MINIMUM_LENGTH = 1;
        private static readonly int MAXIMUM_LENGTH = 80;
        private static readonly string VALID_CHARACTERS = "^[^0-9][A-Za-z0-9_-]*$";

        public Name(string v)
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

        public static implicit operator Name(string v)
        {
            return new Name(v);
        }

        public static implicit operator string(Name v)
        {
            return v.Value;
        }
    }
}
