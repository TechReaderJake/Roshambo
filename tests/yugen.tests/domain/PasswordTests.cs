using NUnit.Framework;
using System;
using System.Collections.Generic;
using System.Text;
using yugen.shared.domain;

namespace yugen.tests.domain
{
    public class PasswordTests
    {
        Password password;

        [TestCase(8)]
        [TestCase(12)]
        [TestCase(60)]
        [TestCase(100)]
        [TestCase(200)]
        [TestCase(240)]
        public void ValidLength(int length)
        {
            var validname = new string('s', length);
            Assert.DoesNotThrow(delegate { password = new Password(validname); });
        }

        [TestCase(5)]
        [TestCase(255)]
        public void BoundaryEdges(int length)
        {
            var bounds = new string('s', length);
            Assert.DoesNotThrow(delegate { password = new Password(bounds); });
        }

        [TestCase("Bob23aa")]
        [TestCase("Big Natica socess")]
        [TestCase("Big24345")]
        [TestCase("D#d!35a@")]
        public void ValidCharacters(string value)
        {
            Assert.DoesNotThrow(delegate { password = new Password(value); });
        }

        [TestCase(0)]
        [TestCase(4)]
        [TestCase(256)]
        [TestCase(10000)]
        [TestCase(1000000)]
        public void OutOfBounds(int length)
        {
            var bounds = new string('s', length);
            Assert.Catch(delegate { password = new Password(bounds); });
        }

        [TestCase("\n \t")]
        [TestCase("\n")]
        public void InvalidCharacters(string value)
        {
            Assert.Catch(delegate { password = new Password(value); });
        }

        [Test]
        public void NotNull()
        {
            Assert.Catch(delegate { password = new Password(null); });
        }
    }
}
