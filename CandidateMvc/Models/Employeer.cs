using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Data.Entity;
using System.Linq;
using System.Web;

namespace CandidateMvc.Models
{
    public class Employeer
    {
        [Key]
        public int EMPID { get; set; }
        public int CID { get; set; }
        public string Position { get; set; }
        public string Company { get; set; }

        [DataType(DataType.Date)]
        [DisplayFormat(DataFormatString = "{0:yyyy-mm-dd}", ApplyFormatInEditMode = true)]
        public DateTime FromDate { get; set; }

        [DataType(DataType.Date)]
        [DisplayFormat(DataFormatString = "{0:yyyy-mm-dd}", ApplyFormatInEditMode = true)]
        public DateTime ToDate { get; set; }
    }
    public class EmployeerDBContext : DbContext
    {
        public DbSet<Employeer> Employeers { get; set; }
    }
}