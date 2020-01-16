using System;
using System.Collections.Generic;
using System.Text;
using NUnit.Framework;
using yugen.shared.domain;

namespace yugen.tests.domain
{
    [TestFixture]
    public class DescriptionTests
    {
        Description description;
        [Test]
        [TestCase(12)]
        [TestCase(20)]
        [TestCase(50)]
        [TestCase(250)]
        public void ValidLength(int length)
        {
            var validname = new string('s', length);
            Assert.DoesNotThrow(delegate { description = new Description(validname); });
        }

        [Test]
        [TestCase(10)]
        [TestCase(255)]
        public void BoundaryEdges(int length)
        {
            var bounds = new string('s', length);
            Assert.DoesNotThrow(delegate { description = new Description(bounds); });
        }

        [Test]
        [TestCase("Bob is large in stature.")]
        [TestCase("Big Natica socess.")]
        [TestCase("Big is to big to be contained.")]
        public void ValidCharacters(string value)
        {
            Assert.DoesNotThrow(delegate { description = new Description(value); });
        }

        [Test]
        [TestCase(0)]
        [TestCase(9)]
        [TestCase(256)]
        [TestCase(1000)]
        [TestCase(10000)]
        [TestCase(1000000)]
        public void OutOfBounds(int length)
        {
            var bounds = new string('s', length);
            Assert.Catch(delegate { description = new Description(bounds); });
        }

        [Test]
        [TestCase("9fdd")]
        [TestCase("12dssa")]
        [TestCase("$%^#&*@!")]
        [TestCase("#^*+=")]
        [TestCase("\n \tdaddd")]
        [TestCase("Dakd\n")]
        public void InvalidCharacters(string value)
        {
            Assert.Catch(delegate { description = new Description(value); });
        }

        [Test]
        public void NotNull()
        {
            Assert.Catch(delegate { description = new Description(null); });
        }
    }
}
