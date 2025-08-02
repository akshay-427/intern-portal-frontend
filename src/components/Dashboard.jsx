import { useEffect, useState } from 'react';
import axios from 'axios';

function Dashboard() {
  const [internData, setInternData] = useState(null);

  useEffect(() => {
    axios.get('http://localhost:5000/api/intern')
      .then(res => setInternData(res.data))
      .catch(err => console.error(err));
  }, []);

  if (!internData) return <p>Loading...</p>;

  return (
    <div>
      <h2>Dashboard</h2>
      <p><strong>Intern Name:</strong> {internData.internName}</p>
      <p><strong>Referral Code:</strong> {internData.referralCode}</p>
      <p><strong>Total Donations:</strong> ₹{internData.totalDonations}</p>

      <h3>🎁 Rewards</h3>
      <ul>
        <li>🎉 Welcome Kit at ₹1000</li>
        <li>🏅 Internship Certificate at ₹5000</li>
        <li>💼 Premium Role at ₹10000</li>
      </ul>
    </div>
  );
}

export default Dashboard;
