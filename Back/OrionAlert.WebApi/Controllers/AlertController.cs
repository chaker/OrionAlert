using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.SignalR;
using OrionAlert.Entities;
using OrionAlert.WebApi.Hubs;

namespace OrionAlert.WebApi.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class AlertController : ControllerBase
    {
        private readonly IHubContext<AlertHub> _hub;

        public AlertController(IHubContext<AlertHub> hub)
        {
            _hub = hub;
        }

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

        //[HttpPost(Name = "api/Refresh")]
        //public void Refresh() {

        //    _hub.Clients.All.SendAsync(nameof(AlertHub.EmitActiveAlerts));
        //}

        [HttpPost(Name = "api/SendAlert")]
        public async Task<IActionResult> SendAlert([FromBody] string message)
        {
            await _hub.Clients.All.SendAsync("ReceiveAlert", message);
            return Ok();
        }
    }
}
