const { MyVeryUsefulProject } = require('../index');
const { getUserOfId, saveUser } = require('../infrastructure/inMemoryDatabase');

describe('Feature: updating bar', () => {
  describe('scenario: updating bar with a value not containing a "?"', () => {
    describe('given a foo object in database with the id foo1 and a bar value of "initial bar value"', () => {
      describe('when updating the bar value to "some new value"', async (done) => {
        test('then the foo object with id foo1 should have its bar value set to "some new value"', () => {
          const inMemoryDatabase = {
            foo1: {
              id: foo1,
              bar: 'initial bar value',
              foobaz: 0
            }
          };
          const myVeryUsefulProject = MyVeryUsefulProject({
            getUserOfId: getUserOfId(inMemoryDatabase),
            saveUser: saveUser(inMemoryDatabase),
          });
          await myVeryUsefulProject.updateBar({ fooId: 'foo1', bar: 'some new value' });
          expect(inMemoryDatabase.foo1.bar).toBe('some new value');
          done();
        });
      });
    });
  });
  describe('scenario: updating bar with a value containing a "?"', () => {
    describe('given a foo object in database with the id foo1 and a bar value of "initial bar value"', () => {
      describe('when updating the bar value to "some other value ?"', async (done) => {
        test('then the foo object with id foo1 should have its bar value set to "some other value ?" and its foobaz value set to 42', () => {
          const inMemoryDatabase = {
            foo1: {
              id: foo1,
              bar: 'initial bar value',
              foobaz: 0
            }
          };
          const myVeryUsefulProject = MyVeryUsefulProject({
            getUserOfId: getUserOfId(inMemoryDatabase),
            saveUser: saveUser(inMemoryDatabase),
          });
          await myVeryUsefulProject.updateBar({ fooId: 'foo1', bar: 'some other value ?' });
          expect(inMemoryDatabase.foo1.bar).toBe('some other value ?');
          expect(inMemoryDatabase.foo1.foobaz).toBe(42);
          done();
        });
      });
    });
  });
});