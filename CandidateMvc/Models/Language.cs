using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Data.Entity;
using System.Linq;
using System.Web;

namespace CandidateMvc.Models
{
    public class Language
    {   [Key]
        public int LID { get; set; }
        public int CID { get; set; }
        public string Lang { get; set; }
    }
    public class LanguageDBContext : DbContext
    {
        public DbSet<Language> Languages { get; set; }
    }
}