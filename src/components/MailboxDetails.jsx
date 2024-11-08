import { useParams } from 'react-router-dom';

const MailboxDetails = (props) => {
    
    const { mailboxId } = useParams();
    const selectedBox = props.mailboxes.find(
    (mailbox) => mailbox._id === Number(mailboxId)
    );


    return (
    <>
        { selectedBox? 
        <>
        <h2>Mailbox Details</h2>
        <p>Box ID: {selectedBox._id}</p>
        <p>Boxholder Name: {selectedBox.name}</p>
        <p>Box Size: {selectedBox.size}</p>
        </> : <p>Mailbox Not Found!</p> }
    </>
    );
};

export default MailboxDetails;