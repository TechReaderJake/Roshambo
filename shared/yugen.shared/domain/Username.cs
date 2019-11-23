using System;
using System.Collections.Generic;
using System.Text;
using yugen.shared.exceptions;
using yugen.shared.util;

namespace yugen.shared.domain
{
    /// <summary>
    /// Username is a penname for a logged in user.
    /// </summary>
    // Rules: 
    //  Cannot start with a number
    //  Only alphabet characters and numerical
    //  Cannot have periods
    //  Cannot be shorter than 4 characters
    //  Cannot be longer than 45 characters
    //  Cannot have the @ symbol or special characters \t \n etc.
    public class Username : ValueObject<Username>
    {
        private static readonly int MINIMUM_LENGTH = 2;
        private static readonly int MAXIMUM_LENGTH = 45;
        private static readonly string VALID_CHARACTERS = "^[^0-9][A-Za-z0-9_-]*$";

        public Username(string v)
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
                Id = Guid.NewGuid();
            }
            else throw new NullReferenceException("The value is null.");
        }

        public Guid Id { get; private set; }
        public string Value { get; private set; }

        public static implicit operator Username(string v)
        {
            return new Username(v);
        }

        public static implicit operator string(Username v)
        {
            return v.Value;
        }
    }
}