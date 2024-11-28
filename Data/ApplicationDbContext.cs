using Microsoft.EntityFrameworkCore;
using WebShopAPI.Models;

namespace WebShopAPI.Data
{
    public class ApplicationDbContext : DbContext
    {
        public ApplicationDbContext(DbContextOptions<ApplicationDbContext> options) : base(options) { }

        public DbSet<User> Users { get; set; }
        public DbSet<Product> Products { get; set; }

        protected override void OnConfiguring(DbContextOptionsBuilder optionsBuilder)
        {
            optionsBuilder.UseMySql(
                "Server=localhost;Database=WebShopDB;User=root;Password=your_password;",
                new MySqlServerVersion(new Version(8, 0, 29))
            );
        }
    }
}
