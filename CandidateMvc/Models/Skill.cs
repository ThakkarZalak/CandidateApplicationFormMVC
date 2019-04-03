using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Data.Entity;
using System.Linq;
using System.Web;

namespace CandidateMvc.Models
{
    public class Skill
    {
        [Key]
        public int SID { get; set; }
        public int CID { get; set; }
        public string Skills { get; set; }
    }
    public class SkillDBContext : DbContext
    {
        public DbSet<Skill> Skills { get; set; }
    }
}