using System;
using System.Collections.Generic;
using System.Text;
using NUnit.Framework;
using yugen.shared.domain;

namespace yugen.tests.domain
{
    // Test normal behavior, boundary behavior, invalid input, and extreme values
    public class NameTests
    {
        Name name;

        [TestCase(8)]
        [TestCase(12)]
        [TestCase(60)]
        [TestCase(70)]
        public void ValidLength(int length)
        {
            var validname = new string('s', length);
            Assert.DoesNotThrow(delegate { name = new Name(validname); });
        }

        [TestCase(4)]
        [TestCase(80)]
        public void BoundaryEdges(int length)
        {
            var bounds = new string('s', length);
            Assert.DoesNotThrow(delegate { name = new Name(bounds); });
        }

        [TestCase("Bob")]
        [TestCase("Big24345")]
        public void ValidCharacters(string value)
        {
            Assert.DoesNotThrow(delegate { name = new Name(value); });
        }

        [TestCase(0)]
        [TestCase(81)]
        [TestCase(100)]
        [TestCase(1000)]
        [TestCase(10000)]
        [TestCase(1000000)]
        public void OutOfBounds(int length)
        {
            var bounds = new string('s', length);
            Assert.Catch(delegate { name = new Name(bounds); });
        }

        [TestCase("9fdd")]
        [TestCase("12dssa")]
        [TestCase("$%^#&*@!")]
        [TestCase("#^*+=")]
        //[TestCase("\n \tdaddd")]
        //[TestCase("Dakd\n")]
        [TestCase("Big Natica socess")]
        public void InvalidCharacters(string value)
        {
            Assert.Catch(delegate { name = new Name(value); });
        }

        [Test]
        public void NotNull()
        {
            Assert.Catch(delegate { name = new Name(null); });
        }
    }
}
