import { useNavigate } from 'react-router-dom';
import { useState } from 'react';

function Login() {
  const navigate = useNavigate();
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    navigate('/dashboard');
  };

  return (
    <div>
      <h2>Dummy Login</h2>
      <form onSubmit={handleSubmit}>
        <input placeholder="Name" required value={name} onChange={e => setName(e.target.value)} /><br />
        <input placeholder="Email" required type="email" value={email} onChange={e => setEmail(e.target.value)} /><br />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default Login;
