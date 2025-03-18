namespace InterviewScheduler.Model
{
    public interface IInterviewDataAccess
    {
        int AddCandidates(Candidates candidates);
        Candidates GetByName(string name);
        Candidates GetByEmailid(string email);
        Candidates GetByPhone(string phone);
        void AddInterview(Recruiter recruiter);
        Recruiter GetByDate(DateOnly date);
        Recruiter GetByRounds(int rounds);
        Recruiter GetByInterviewName(string interviewName);
        void AddStatus(InterviewStatus status);
        void UpdateOfferLetterStatus(InterviewStatus status);
    }
}
