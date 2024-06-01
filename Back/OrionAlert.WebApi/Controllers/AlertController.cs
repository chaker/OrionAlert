using Microsoft.AspNetCore.Mvc;
using OrionAlert.Entities;

namespace OrionAlert.WebApi.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class AlertController : ControllerBase
    {

        [HttpGet(Name = "api/GetAlert")]
        public IEnumerable<Alert> Get()
        {
            return Enumerable.Range(1, 5).Select(index => new Alert
            {
                Id = Guid.NewGuid(),
                CreatedAt = DateTime.Now.AddDays(index),
                UpdatedAt = DateTime.Now.AddDays(index),
                Label = $"Alert {index}",
                Status = Enums.Status.Present,
                Expression = "If Trade > 0",
                IsActive = true
            })
            .ToArray();
        }
    }
}
