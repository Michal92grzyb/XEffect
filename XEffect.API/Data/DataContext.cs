using Microsoft.EntityFrameworkCore;
using XEffect.API.Models;

namespace XEffect.API.Data
{
    public class DataContext : DbContext
    {
        public DataContext(DbContextOptions<DataContext> options) : base(options)
        {
        }

        public DbSet<InitModel> InitModels { get; set; }
        public DbSet<User> Users { get; set; }
    }
}