using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Cors;
using Microsoft.AspNetCore.Mvc;
using WebAPI.Modals;

// For more information on enabling Web API for empty projects, visit https://go.microsoft.com/fwlink/?LinkID=397860

namespace WebAPI.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    [EnableCors("CORS")]
    public class PremiumController : ControllerBase
    {
        private static readonly Dictionary<string, double> occupationRating = new Dictionary<string, double>()
        {
            { "Professional",    1.0 },
            {"White Collar",    1.25 },
            {"Light Manual",    1.50 },
            {"Heavy Manual",    1.75 }

        };



        // GET: api/<PremiumController>
        [HttpGet]     
        [Route("GetOccupationList")]
        public List<Occupation> GetOccupationList()
        {
            List<Occupation> obj = new List<Occupation>();
            obj.Add(new Occupation { Name = "Cleaner", Rating = "Light Manual" });
            obj.Add(new Occupation { Name = "Doctor", Rating = "Professional" });
            obj.Add(new Occupation { Name = "Author", Rating = "White Collar" });
            obj.Add(new Occupation { Name = "Farmer", Rating = "Heavy Manual" });
            obj.Add(new Occupation { Name = "Mechanic", Rating = "Heavy Manual" });
            obj.Add(new Occupation { Name = "Florist", Rating = "Light Manual" });

            return obj;
        }
       
        // POST api/<PremiumController>
        [HttpPost]
        public double Post(User user)
        {
            return (user.sumAssured * occupationRating[user.occupation] * user.Age) / 1000 * 12;

        }

        // PUT api/<PremiumController>/5
        [HttpPut("{id}")]
        public void Put(int id, [FromBody] string value)
        {
        }

        // DELETE api/<PremiumController>/5
        [HttpDelete("{id}")]
        public void Delete(int id)
        {
        }
    }
}
