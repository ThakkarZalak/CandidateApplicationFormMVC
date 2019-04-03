using System.ComponentModel.DataAnnotations;
using System.Data.Entity;

namespace CandidateMvc.Models
{
    public class Reference
    {   [Key]
        public int RID { get; set; }
        public int CID { get; set; }
        public string ReferenceName { get; set; }
        public string ReferenceRelationship { get; set; }
        public string ReferenceContactNo { get; set; }
    }
    public class ReferenceDBContext : DbContext
    {
        public DbSet<Reference> References { get; set; }
    }
}