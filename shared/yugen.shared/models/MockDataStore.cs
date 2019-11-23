using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using yugen.shared.domain;
using yugen.shared.util;

namespace yugen.shared.models
{
    public class MockDataStore : IDataStore<Email>
    {
        List<Email> emails;

        public MockDataStore()
        {
            emails = new List<Email>();
            var mockItems = new List<Email>
            {
                new Email("example1@example.com"),
                new Email("example2@example.com"),
                new Email("example3@example.com"),
                new Email("example4@example.com"),
                new Email("example5@example.com"),
                new Email("example6@example.com"),
            };

            foreach (var email in mockItems)
            {
                emails.Add(email);
            }
        }

        public async Task<bool> AddItemAsync(Email item)
        {
            emails.Add(item);

            return await Task.FromResult(true);
        }

        public Task<bool> DeleteItemAsync(string id)
        {
            throw new NotImplementedException();
        }

        public Task<Email> GetItemAsync(string id)
        {
            throw new NotImplementedException();
        }

        public async Task<IEnumerable<Email>> GetItemsAsync(bool forceRefresh = false)
        {
            return await Task.FromResult(emails);
        }

        public async Task<bool> UpdateItemAsync(Email item)
        {
            emails.Remove(item);
            emails.Add(item);

            return await Task.FromResult(true);
        }
    }
}

//using System;
//using System.Collections.Generic;
//using System.Linq;
//using System.Threading.Tasks;
//using ApiExample.Models;

//namespace ApiExample.Services
//{
//    public class MockDataStore : IDataStore<Item>
//    {
//        List<Item> items;

//        public MockDataStore()
//        {
//            items = new List<Item>();
//            var mockItems = new List<Item>
//            {
//                new Item { Id = Guid.NewGuid().ToString(), Text = "First item", Description="This is an item description." },
//                new Item { Id = Guid.NewGuid().ToString(), Text = "Second item", Description="This is an item description." },
//                new Item { Id = Guid.NewGuid().ToString(), Text = "Third item", Description="This is an item description." },
//                new Item { Id = Guid.NewGuid().ToString(), Text = "Fourth item", Description="This is an item description." },
//                new Item { Id = Guid.NewGuid().ToString(), Text = "Fifth item", Description="This is an item description." },
//                new Item { Id = Guid.NewGuid().ToString(), Text = "Sixth item", Description="This is an item description." },
//            };

//            foreach (var item in mockItems)
//            {
//                items.Add(item);
//            }
//        }

//        public async Task<bool> AddItemAsync(Item item)
//        {
//            items.Add(item);

//            return await Task.FromResult(true);
//        }

//        public async Task<bool> UpdateItemAsync(Item item)
//        {
//            var oldItem = items.Where((Item arg) => arg.Id == item.Id).FirstOrDefault();
//            items.Remove(oldItem);
//            items.Add(item);

//            return await Task.FromResult(true);
//        }

//        public async Task<bool> DeleteItemAsync(string id)
//        {
//            var oldItem = items.Where((Item arg) => arg.Id == id).FirstOrDefault();
//            items.Remove(oldItem);

//            return await Task.FromResult(true);
//        }

//        public async Task<Item> GetItemAsync(string id)
//        {
//            return await Task.FromResult(items.FirstOrDefault(s => s.Id == id));
//        }

//        public async Task<IEnumerable<Item>> GetItemsAsync(bool forceRefresh = false)
//        {
//            return await Task.FromResult(items);
//        }
//    }
//}
