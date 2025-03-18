
namespace InterviewScheduler.Model
{
    public class InterviewDataAccess : IInterviewDataAccess
    {
        private readonly InterviewDbContext interviewDbContext;
        public InterviewDataAccess(InterviewDbContext interviewDbContext)
        {
            this.interviewDbContext = interviewDbContext;
        }

        public int AddCandidates(Candidates candidates)
        {
            throw new NotImplementedException();
        }

        public void AddInterview(Recruiter recruiter)
        {
            throw new NotImplementedException();
        }

        public void AddStatus(InterviewStatus status)
        {
            throw new NotImplementedException();
        }

        public Recruiter GetByDate(DateOnly date)
        {
            throw new NotImplementedException();
        }

        public Candidates GetByEmailid(string email)
        {
            throw new NotImplementedException();
        }

        public Recruiter GetByInterviewName(string interviewName)
        {
            throw new NotImplementedException();
        }

        public Candidates GetByName(string name)
        {
            throw new NotImplementedException();
        }

        public Candidates GetByPhone(string phone)
        {
            throw new NotImplementedException();
        }

        public Recruiter GetByRounds(int rounds)
        {
            throw new NotImplementedException();
        }

        public void UpdateOfferLetterStatus(InterviewStatus status)
        {
            throw new NotImplementedException();
        }
    }
}
