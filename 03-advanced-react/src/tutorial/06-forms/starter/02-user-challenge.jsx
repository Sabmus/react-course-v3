import { useState } from 'react';
import { data } from '../../../data.js';

const UserChallenge = () => {
  const [name, setName] = useState('');
  const [users, setUsers] = useState(data);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!name) return;
    const fakeId = Date.now();
    const updatedUsers = [...users, { id: fakeId, name }];

    setUsers(updatedUsers);
    console.log('form submitted');
    setName('');
  };

  return (
    <div>
      <form className="form" onSubmit={handleSubmit}>
        <h4>Add User</h4>
        <div className="form-row">
          <label htmlFor="name" className="form-label">
            name
          </label>
          <input
            type="text"
            className="form-input"
            id="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>

        <button type="submit" className="btn btn-block">
          submit
        </button>
      </form>
      {/* render users below */}
      <div>
        {users.map((person) => {
          return <h2 key={person.id}>{person.name}</h2>;
        })}
      </div>
    </div>
  );
};
export default UserChallenge;
