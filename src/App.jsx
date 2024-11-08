import NavBar from './components/NavBar';
import { useState } from 'react';
import MailboxList from './components/MailboxList';
import { Route, Routes } from 'react-router-dom';
import MailboxDetails from './components/MailboxDetails';
import MailboxForm from './components/MailboxForm';

const App = () => {

  const [mailboxes, setMailboxes] = useState([]);

  const addMail = (newMailData) => {
    newMailData._id = mailboxes.length + 1;
    setMailboxes([...mailboxes, newMailData]);
  };

  return (
    <>
    <NavBar />
    <h1>Mailbox List</h1>
    <Routes>
      <Route path="/" element={<main><h1>Post Office</h1></main>} />
      <Route path="/mailboxes" element={<MailboxList mailboxes={mailboxes} />} />
      <Route
        path="/mailboxes/:mailboxId"
        element={<MailboxDetails mailboxes={mailboxes} />}
      />
      <Route path="/new-mailbox" element={<MailboxForm addMail={addMail} />} />
    </Routes>
    </>
  );
};

export default App;