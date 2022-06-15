using System.Collections.Generic;
using System.Linq;
using Microsoft.AspNetCore.Mvc.Routing;

namespace API.Entities
{
    public class Basket
    {
        public int Id { get; set; }
        public string BuyerId { get; set; }
        public int Quantity { get; set; }
        public List<BasketItem> Items { get; set; } = new();

        public void AddItem(Product product, int quantity)
        {
            if (Items.All(item => item.ProductId != product.Id))
            {
                Items.Add(new BasketItem
                {
                    Product = product,
                    Quantity = quantity
                });
                return;
            }

            var existingItem = Items.FirstOrDefault(item => item.ProductId == product.Id);
            if (null != existingItem)
                existingItem.Quantity += quantity;
        }

        public void RemoveItem(int productId, int quantity)
        {
            var item = Items.FirstOrDefault(x => x.ProductId == productId);
            if (null == item) return;
            item.Quantity -= quantity;
            if (item.Quantity == 0) Items.Remove(item);
        }
    }
}