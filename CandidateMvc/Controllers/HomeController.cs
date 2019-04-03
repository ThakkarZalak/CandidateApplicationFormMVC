using CandidateMvc.Models;
using System;
using System.Collections.Generic;
using System.Diagnostics;
using System.IO;
using System.Linq;
using System.Web;
using System.Web.Mvc;

namespace CandidateMvc.Controllers
{
    public class HomeController : Controller
    {
        private static string file_path;
        private CandidateDBContext CAND = new CandidateDBContext();
        private LanguageDBContext LANG = new LanguageDBContext();
        private EducationDBContext EDU = new EducationDBContext();
        private EmployeerDBContext EMP = new EmployeerDBContext();
        private SkillDBContext SKILL = new SkillDBContext();
        private ReferenceDBContext REF = new ReferenceDBContext();
        public ActionResult Index()
        {
            return View();
        }
        //public ActionResult submited()
        //{
        //    //RedirectToAction("Index");
        //    //return View();

        //}
        [HttpPost]
        public bool Form(Candidate c, List<string> Lang, List<Education> edu, List<Employeer> emp, List<string> Skills, List<Reference> refer)
        {
            c.UploadResume = file_path;
            CAND.Candidates.Add(c);
            CAND.SaveChanges();
            var c_id = c.ID;
            foreach (string lang in Lang)
            {
                Language l = new Language() { CID = c_id, Lang = lang };
                LANG.Languages.Add(l);
                LANG.SaveChanges();
            }

            foreach (Education ed in edu)
            {
                ed.CID = c_id;
                EDU.Educations.Add(ed);
                EDU.SaveChanges();

            }

            foreach (Employeer em in emp)
            {
                em.CID = c_id;
                EMP.Employeers.Add(em);
                EMP.SaveChanges();

            }
            foreach (string s in Skills)
            {
                Skill sk = new Skill() { CID = c_id, Skills = s };
                SKILL.Skills.Add(sk);
                SKILL.SaveChanges();
            }
            foreach (Reference r in refer)
            {
                r.CID = c_id;
                REF.References.Add(r);
                REF.SaveChanges();

            }
            return true;
        }

        [HttpPost]
        public bool Upload()
        {
            Debug.WriteLine(Request.Files.Count);
            try
            {
                HttpPostedFileBase file = Request.Files[0];
                string ext = Path.GetExtension(file.FileName);
                string name = Path.GetFileNameWithoutExtension(file.FileName) + DateTime.Now.ToFileTime() + ext;
                string rootPath = "~/App_Data/" + name;
                file_path = Server.MapPath(rootPath);
                file.SaveAs(file_path);
                return true;

            }
            catch (Exception e)
            {
                Debug.WriteLine("hello error");
            }
                return false;
        }

    }
}