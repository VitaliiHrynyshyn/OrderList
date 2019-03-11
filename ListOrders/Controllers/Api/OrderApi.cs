using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using ListOrders.Models;
using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Mvc.ModelBinding.Validation;

namespace ListOrders.Controllers.Api
{
    [Route("api/Order")]
    [ApiController]
    public class OrderApi : ControllerBase
    {
        private readonly OrderContext db;
        public OrderApi(OrderContext db)
        {
            this.db = db;
        }

        [HttpGet("get")]
        public ActionResult<List<Order>> Get()
        {
            var orders = db.Orders.ToList();
            return orders;
        }

        // GET api/values/5
        [HttpGet("{id}")]
        public ActionResult<string> Find(int id)
        {
            return "value";
        }

        [HttpPost("add")]
        public void Add(Order order)
        {
            order.Status = Status.New;
            db.Orders.Add(order);
            db.SaveChanges();
        }

        // PUT api/values/5
        [HttpPatch("update")]
        public void Update(int id)
        {
            var orderToUpdate = db.Orders.FirstOrDefault(c => c.OrderId == id);
            if (orderToUpdate != null)
            {
                orderToUpdate.Status = orderToUpdate.Status == Status.New ? Status.Completed : Status.New;
                db.SaveChanges();
            }
        }

        // DELETE api/values/5
        [HttpDelete("delete")]
        public void Delete(int id)
        {
            var orderToDelete = db.Orders.FirstOrDefault(c => c.OrderId == id);
            if (orderToDelete != null)
            {
                db.Orders.Remove(orderToDelete);
                db.SaveChanges();
            }
        }
    }
}

