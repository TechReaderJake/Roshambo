using System;
using System.Collections.Generic;
using System.Text;
using yugen.shared.exceptions;
using yugen.shared.util;

namespace yugen.shared.domain
{
    /// <summary>
    /// Email is what the user uses to login to the system.
    /// </summary>
    // Rules: 
    //  Cannot start with a number.
    //  Only alphabet characters and numerical
    //  Local cannot be longer than 64 characters
    //  Domain cannot be longer than 255 characters
    //  Must have one @ symbol
    public class Email : ValueObject<Email>
    {
        private static readonly int MINIMUM_LENGTH = 10;
        private static readonly int MAXIMUM_LOCAL_LENGTH = 64;
        private static readonly int MAXIMUM_DOMAIN_LENGTH = 255;
        private static readonly int MAXIMUM_LENGTH = 319;
        //private static readonly string VALID_CHARACTERS = "^(?=[a-z0-9.@]{10,77}$)[a-z0-9_-]+\\.?[a-z0-9]+.com$";
        private static readonly string VALID_CHARACTERS = "^[^0-9][a-z0-9_-]+@[A-Za-z0-9_-]+\\.com$";

        public Email(string v)
        {
            if (v != null)
            {
                string trimmed = v.Trim();
                trimmed = trimmed.ToLower();
                if (trimmed.Length < MINIMUM_LENGTH || trimmed.Length > MAXIMUM_LENGTH)
                {
                    throw new InvalidStringLengthException("Not valid length for a email.");
                }

                if (!System.Text.RegularExpressions.Regex.IsMatch(trimmed, VALID_CHARACTERS))
                {
                    throw new InvalidValueException("Not valid characters in the email.");
                }
                var arry = trimmed.Split('@');
                if (arry[0].Length > MAXIMUM_LOCAL_LENGTH || arry[1].Length > MAXIMUM_DOMAIN_LENGTH)
                {
                    throw new InvalidStringLengthException("Not valid length for local or domain of the email.");
                }
                Value = trimmed;
            }
            else throw new NullReferenceException("The value is null.");
        }


        public string Value { get; private set; }

        public static implicit operator Email(string v)
        {
            return new Email(v);
        }

        public static implicit operator string(Email v)
        {
            return v.Value;
        }
    }
}