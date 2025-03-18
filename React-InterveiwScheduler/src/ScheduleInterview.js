import React, { useState } from 'react';
import axios from 'axios';

const ScheduleInterview = () => {
  const [formData, setFormData] = useState({
    recruiterId: '',
    date: '',
    time: '',
    rounds: '',
    name: '',
    designation: '',
    emailId: '',
    interviewStatus: '',
    recommendedDesignation: '',
    remarks: '',
    offerLetterStatus: '',
    candidateId: ''
  });

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const [successMessage, setSuccessMessage] = useState('');

  
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value
    }));
  };

 
  const handleSubmit = async (e) => {
    e.preventDefault();

      if (!formData.recruiterId || !formData.date || !formData.time || !formData.candidateId) {
      setError('Please fill in all required fields.');
      return;
    }

    setLoading(true);
    setError('');
    setSuccessMessage('');

    try {
        const token = localStorage.getItem('token');
      const response = await axios.post('http://localhost:5129/api/ScheduleInterview', formData,{
        headers: {
            'Content-Type': 'application/json' ,
            // 'Content-Type': 'multipart/form-data',
            Authorization :`Bearer ${token}`
          },
      });
      
      // If the request is successful
      if (response.status === 200) {
        setSuccessMessage('Interview details submitted successfully!');
        setFormData({
          recruiterId: '',
          date: '',
          time: '',
          rounds: '',
          name: '',
          designation: '',
          emailId: '',
          interviewStatus: '',
          recommendedDesignation: '',
          remarks: '',
          offerLetterStatus: '',
          candidateId: ''
        });
      }
      console.log('Response:', response.data);
    } catch (error) {
      setError('Failed to submit interview details.');
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div>
      <h2>Interview Form</h2>
      
      <form onSubmit={handleSubmit}>
        {/* Recruiter ID */}
        <div>
          <label htmlFor="recruiterId">Recruiter ID:</label>
          <input
            type="number"
            id="recruiterId"
            name="recruiterId"
            value={formData.recruiterId}
            onChange={handleChange}
            required
          />
        </div>

        {/* Date */}
        <div>
          <label htmlFor="date">Date:</label>
          <input
            type="date"
            id="date"
            name="date"
            value={formData.date}
            onChange={handleChange}
            required
          />
        </div>

        {/* Time */}
        <div>
          <label htmlFor="time">Time:</label>
          <input
            type="text"
            id="time"
            name="time"
            value={formData.time}
            onChange={handleChange}
            required
          />
        </div>

        {/* Rounds */}
        <div>
          <label htmlFor="rounds">Rounds:</label>
          <input
            type="number"
            id="rounds"
            name="rounds"
            value={formData.rounds}
            onChange={handleChange}
          />
        </div>

        {/* Name */}
        <div>
          <label htmlFor="name">Name:</label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
          />
        </div>

        {/* Designation */}
        <div>
          <label htmlFor="designation">Designation:</label>
          <input
            type="text"
            id="designation"
            name="designation"
            value={formData.designation}
            onChange={handleChange}
          />
        </div>

        {/* Email ID */}
        <div>
          <label htmlFor="emailId">Email ID:</label>
          <input
            type="text"
            id="emailId"
            name="emailId"
            value={formData.emailId}
            onChange={handleChange}
          />
        </div>

        <div>
          <label htmlFor="interviewStatus">Interview Status:</label>
          <input
            type="text"
            id="interviewStatus"
            name="interviewStatus"
            value={formData.interviewStatus}
            onChange={handleChange}
          />
        </div>
        <div>
          <label htmlFor="recommendedDesignation">Recommended Designation:</label>
          <input
            type="text"
            id="recommendedDesignation"
            name="recommendedDesignation"
            value={formData.recommendedDesignation}
            onChange={handleChange}
          />
        </div>

                <div>
          <label htmlFor="remarks">Remarks:</label>
          <input 
          type="text"
            id="remarks"
            name="remarks"
            value={formData.remarks}
            onChange={handleChange}
          />
        </div>

              <div>
          <label htmlFor="offerLetterStatus">Offer Letter Status:</label>
          <input
            type="text"
            id="offerLetterStatus"
            name="offerLetterStatus"
            value={formData.offerLetterStatus}
            onChange={handleChange}
          />
        </div>

              <div>
          <label htmlFor="candidateId">Candidate ID:</label>
          <input
            type="number"
            id="candidateId"
            name="candidateId"
            value={formData.candidateId}
            onChange={handleChange}
            required
          />
        </div>

               {error && <p style={{ color: 'red' }}>{error}</p>}
        {successMessage && <p style={{ color: 'green' }}>{successMessage}</p>}

               <button type="submit" disabled={loading}>
          {loading ? 'Submitting...' : 'Submit'}
        </button>
      </form>
    </div>
  );
};

export default ScheduleInterview;
