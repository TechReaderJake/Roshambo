using NUnit.Framework;
using System;
using System.Collections.Generic;
using System.Text;
using yugen.shared.domain;

namespace yugen.tests.domain
{
    [TestFixture]
    public class EmailTests
    {
        Email email;

        [Test]
        [TestCase(5, 10)]
        [TestCase(10, 20)]
        [TestCase(40, 230)]
        [TestCase(60, 240)]
        public void ValidLength(int locallength, int domainlength)
        {
            var local = new string('s', locallength);
            var domain = new string('s', domainlength);
            var validemail = MakeEmail(local, domain);
            Assert.DoesNotThrow(delegate { email = new Email(validemail); });
        }

        [Test]
        [TestCase(3, 3)]
        [TestCase(63, 251)]
        public void BoundaryEdges(int locallength, int domainlength)
        {
            var local = new string('s', locallength);
            var domain = new string('s', domainlength);
            var validemail = MakeEmail(local, domain);
            Assert.DoesNotThrow(delegate { email = new Email(validemail); });
        }

        [Test]
        [TestCase("Bob@gmail.com")]
        [TestCase("yello_liz-123@hookbook.com")]
        [TestCase("smi-2392_@jimnew.com")]
        public void ValidCharacters(string value)
        {
            Assert.DoesNotThrow(delegate { email = new Email(value); });
        }

        [Test]
        [TestCase(0)]
        [TestCase(2)]
        [TestCase(70)]
        [TestCase(1000)]
        [TestCase(10000)]
        [TestCase(1000000)]
        public void OutOfBounds(int locallength)
        {
            var local = new string('s', locallength);
            var validemail = MakeEmail(local, local);
            Assert.Catch(delegate { email = new Email(validemail); });
        }

        [Test]
        [TestCase("9fdd")]
        [TestCase("12dssa")]
        [TestCase("$%^#&*@!")]
        [TestCase("#^*+=")]
        [TestCase("\n \tdaddd")]
        [TestCase("Dakd\n")]
        public void InvalidCharacters(string val)
        {
            var value = MakeEmail(val, val);
            Assert.Catch(delegate { email = new Email(value); });
        }

        [Test]
        public void NotNull()
        {
            Assert.Catch(delegate { email = new Email(null); });
        }

        private string MakeEmail(string local, string domain)
        {
            var email = local + "@" + domain + ".com";
            return email;
        }
    }
}
