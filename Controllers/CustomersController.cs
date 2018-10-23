using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;

using WebDemo.Models;

namespace WebDemo.Controllers
{
    [Route("api/[controller]")]
    public class CustomerController : Controller // pienillä ja isoilla kirjaimilla ei tässä merkitystä
    {

/*             [Route("moikka")]   //https://localhost:5001/api/customer/moikka
                        public string GetMoi() {
                    return "Moikka!";
            }*/

            [Route("luvut")]  //https://localhost:5001/api/customer/luvut
                        public int[] GetLuvut() {
                    return new int[] { 1,2,3,4,5 };
            } 

        public List<Customers> GetCustomers()
        {
            NorthwindContext context = new NorthwindContext();

            List<Customers> customers = ( from c in context.Customers
                                        where c.Country == "Sweden"
                                        select c).ToList();
            return customers;
        }

    }
}
