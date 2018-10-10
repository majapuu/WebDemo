using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;

using WebDemo.Models;

namespace WebDemo.Controllers
{
    [Route("api/[controller]")]
    public class CustomerController : Controller
    {

        public List<Customers> GetCustomers()
        {
            NorthwindContext context = new NorthwindContext();

            List<Customers> customers = ( from c in context.Customers
                                        where c.Country == "Finland"
                                        select c).ToList();
            return customers;
        }

    }
}
