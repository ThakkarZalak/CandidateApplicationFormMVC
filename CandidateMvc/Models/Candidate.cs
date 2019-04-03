using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Data.Entity;
using System.Linq;
using System.Web;

namespace CandidateMvc.Models
{
    public class Candidate
    {
        public int ID { get; set; }
        public string ContactPerson { get; set; }

        [DataType(DataType.Date)]
        [DisplayFormat(DataFormatString = "{0:yyyy-mm-dd}", ApplyFormatInEditMode = true)]
        public DateTime InPersonInterview { get; set; }

        public string PositionDesired { get; set; }

        public string PreferedLocation { get; set; }

        public int CurrentCTC { get; set; }

        public int ExpectedSalary { get; set; }

        [DataType(DataType.Date)]
        [DisplayFormat(DataFormatString = "{0:yyyy-mm-dd}", ApplyFormatInEditMode = true)]
        public DateTime AvailabilityOnBoard { get; set; }
        
        public string Venue { get; set; }

        public string FirstName { get; set; }

        public string MidName { get; set; }

        public string LastName { get; set; }

        public string Address { get; set; }

        public string Email { get; set; }

        public string Phone { get; set; }

        public string LanLine { get; set; }

        [DataType(DataType.Date)]
        [DisplayFormat(DataFormatString = "{0:yyyy-mm-dd}", ApplyFormatInEditMode = true)]
        public DateTime DateOfBirth { get; set; }

        public int Age { get; set; }

        public string MaritalStatus { get; set; }

        public string Gender { get; set; }

        public string AboutCollabera { get; set; }

        public string KnowAboutCollabera { get; set; }

        public string CareerAspiration { get; set; }

        public string Suitability { get; set; }
        
        public string UploadResume { get; set; }

    }
    public class CandidateDBContext : DbContext
    {
        public DbSet<Candidate> Candidates { get; set; }
    }
}