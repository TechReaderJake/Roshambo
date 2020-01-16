using NUnit.Framework;
using System;
using System.Collections.Generic;
using System.Text;
using yugen.shared.domain;

namespace yugen.tests.domain
{
    // Test normal behavior, boundary behavior, invalid input, and extreme values
    [TestFixture]
    public class UsernameTests
    {
        Username name;

        [Test]
        [TestCase(5)]
        [TestCase(12)]
        [TestCase(30)]
        [TestCase(38)]
        public void ValidLength(int length)
        {
            var validname = new string('s', length);
            Assert.DoesNotThrow(delegate { name = new Username(validname); });
        }

        [Test]
        [TestCase(2)]
        [TestCase(45)]
        public void BoundaryEdges(int length)
        {
            var bounds = new string('s', length);
            Assert.DoesNotThrow(delegate { name = new Username(bounds); });
        }

        [Test]
        [TestCase("Bob")]
        [TestCase("Big24345")]
        public void ValidCharacters(string value)
        {
            Assert.DoesNotThrow(delegate { name = new Username(value); });
        }

        [Test]
        [TestCase(0)]
        [TestCase(81)]
        [TestCase(100)]
        [TestCase(1000)]
        [TestCase(10000)]
        [TestCase(1000000)]
        public void OutOfBounds(int length)
        {
            var bounds = new string('s', length);
            Assert.Catch(delegate { name = new Username(bounds); });
        }

        [Test]
        [TestCase("9fdd")]
        [TestCase("12dssa")]
        [TestCase("$%^#&*@!")]
        [TestCase("#^*+=")]
        //[TestCase("\n \tdaddd")]
        //[TestCase("Dakd\n")]
        [TestCase("Big Natica socess")]
        public void InvalidCharacters(string value)
        {
            Assert.Catch(delegate { name = new Username(value); });
        }

        [Test]
        public void NotNull()
        {
            Assert.Catch(delegate { name = new Username(null); });
        }

    }
}
