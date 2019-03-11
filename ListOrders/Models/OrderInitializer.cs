using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace ListOrders.Models
{
    public class OrderInitializer
    {
        protected void Seed(OrderContext db)
        {
            db.Orders.Add(new Order()
                { Name = "Война и мир", Status = Status.New, Count = 1, Weight = 1.0 });
            db.SaveChanges();
        }
    }
}
