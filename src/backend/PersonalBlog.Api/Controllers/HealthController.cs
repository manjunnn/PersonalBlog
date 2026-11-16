
using Microsoft.AspNetCore.Mvc;

namespace PersonalBlog.Api.Controllers;

[ApiController]
[Route("api/[controller]")]
public class HealthController : ControllerBase
{
    [HttpGet]
    public IActionResult Get()
    {
        return Ok(new
        {
            Application = "Manjunatha's Tech Blog",
            Status = "Healthy",
            Version = "1.0.0",
            Timestamp = DateTimeOffset.UtcNow
        });
    }
}
