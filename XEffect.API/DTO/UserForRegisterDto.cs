using System.ComponentModel.DataAnnotations;

namespace XEffect.API.DTO
{
    public class UserForRegisterDto
    {
        [Required]
        [StringLength(16, MinimumLength = 3, ErrorMessage = "Wrong username lenght")]
        public string Username { get; set; }
        

        // TODO: better error msg
        [Required]
        [StringLength(16, MinimumLength = 8, ErrorMessage = "Wrong password lenght")]
        [RegularExpression(@"^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[!@#$%^&*])(?!.*\s).*$", ErrorMessage = "Invalid password")]
        public string Password { get; set; }
    }
}