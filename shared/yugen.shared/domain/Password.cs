using System;
using System.Collections.Generic;
using System.Text;
using yugen.shared.exceptions;
using yugen.shared.util;

namespace yugen.shared.domain
{
    /// <summary>
    /// Password is what to use when having users sign in.
    /// </summary>
    // Rules: 
    //  Alphabet characters, numerical, some special characters (@#!$*&|_-) etc.
    //  Min length 4 characters
    //  Max length 255 characters
    //  Cannot contain <>/\{}[];
    public class Password : ValueObject<Password>
    {
        private static readonly int MINIMUM_LENGTH = 5;
        private static readonly int MAXIMUM_LENGTH = 255;
        private static readonly string VALID_CHARACTERS = "[A-Za-z0-9_-]+";

        public Password(string v)
        {
            if (v != null)
            {
                string trimmed = v.Trim();
                if (trimmed.Length < MINIMUM_LENGTH || trimmed.Length > MAXIMUM_LENGTH)
                {
                    throw new InvalidStringLengthException("Not valid length for a password.");
                }

                if (!System.Text.RegularExpressions.Regex.IsMatch(trimmed, VALID_CHARACTERS))
                {
                    throw new InvalidValueException("Not valid characters in the password.");
                }
                Value = trimmed;
            }
            else throw new NullReferenceException("The value is null.");
        }


        public string Value { get; private set; }

        public static implicit operator Password(string v)
        {
            return new Password(v);
        }

        //public static implicit operator string(Password v)
        //{
        //    return v.Value;
        //}
    }
}
