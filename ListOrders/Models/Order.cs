using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.EntityFrameworkCore.Metadata.Internal;

namespace ListOrders.Models
{
    public class Order
    {
        [Key]
        public int OrderId { set; get; }
        public string Name { set; get; }
        public Status Status { set; get; }
        public int Count { set; get; }
        public double Weight { set; get; }
    }
}
