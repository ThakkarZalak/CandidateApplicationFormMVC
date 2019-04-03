using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Data.Entity;
using System.Linq;
using System.Web;

namespace CandidateMvc.Models
{
    public class Education
    {
        [Key]
        public int EDID { get; set; }
        public int CID { get; set; }
        public string Course { get; set; }
        public string YearGraduate { get; set; }
        public string SchoolUniversity { get; set; }
        public string OtherTrainings { get; set; }
    }
    public class EducationDBContext : DbContext
    {
        public DbSet<Education> Educations { get; set; }
    }
}