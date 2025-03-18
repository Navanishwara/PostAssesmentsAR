create database InterviewScheduler;
 create table recruiters(
date Date,
time time,
Rounds int,
name varchar(25),
designation varchar(25),
emailId varchar(25)
 );

create table Candidates(
CandidateId serial primary key,
CandidateName varchar,
emailId varchar,
resume BYTEA
)

create table InterviewStatus(
status varchar,
RecomendedDesignation varchar,
Remarks varchar,
offerLetterStatus varchar,
CandidateId int references Candidates(CandidateId)
)
