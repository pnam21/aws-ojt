using Microsoft.AspNetCore.Mvc;
using WebShopAPI.Data;
using WebShopAPI.Models;

namespace WebShopAPI.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class AccountController : ControllerBase
    {
        private readonly ApplicationDbContext _context;

        public AccountController(ApplicationDbContext context)
        {
            _context = context;
        }

        [HttpPost("register")]
        public IActionResult Register(User user)
        {
            if (_context.Users.Any(u => u.Email == user.Email))
                return BadRequest("Email is already registered.");

            _context.Users.Add(user);
            _context.SaveChanges();
            return Ok("User registered successfully.");
        }

        [HttpPost("login")]
        public IActionResult Login([FromBody] User login)
        {
            var user = _context.Users.FirstOrDefault(u => u.Email == login.Email && u.Password == login.Password);
            if (user == null) return Unauthorized("Invalid credentials.");
            return Ok("Login successful.");
        }
    }
}
