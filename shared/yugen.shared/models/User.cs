using System;
using System.Collections.Generic;
using System.Text;
using yugen.shared.domain;

namespace yugen.shared.models
{
    public class User
    {
        public User(FirstName first, LastName last, Username user, Password password)
        {
            Id = Guid.NewGuid();
            FirstName = first;
            LastName = last;
            Username = user;
            Password = password;
        }
        public Guid Id { get; private set; }
        public FirstName FirstName { get; private set; }
        public LastName LastName { get; private set; }
        public Username Username { get; private set; }
        public Password Password { get; private set; }
    }
}
