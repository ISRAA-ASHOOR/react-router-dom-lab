import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const initialState = {
    name: '',
    size: 'small',
};

const MailboxForm = (props) => {
    const navigate = useNavigate();
    const [formData, setFormData] = useState(initialState);

    const handleSubmit = (e) => {
        e.preventDefault();
        props.addMail(formData);
        setFormData(initialState);
        navigate('/mailboxes');
    };

    const handleChange = ({ target }) => {
        setFormData({ ...formData, [target.name]: target.value });
    };

  return (
    <main>
        <h2>New Mailbox</h2>
        <form onSubmit={handleSubmit}>
            <label htmlFor="name">Enter a Boxholder:</label>
            <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
            />
            
            <label htmlFor="size">Select a Box size:</label>
            <select
                id="size"
                name="size"
                value={formData.size}
                onChange={handleChange}
            >
                <option value="small">Small</option>
                <option value="medium">Medium</option>
                <option value="large">Large</option>
            </select>
            
            <button type="submit">Submit</button>
        </form>
    </main>
  );
};

export default MailboxForm;