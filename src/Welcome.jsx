import Alert from 'react-bootstrap/Alert';
import './Welcome.css';


function Welcome() {
  return (
    <Alert variant="success" id='welcome-alert'>
      <Alert.Heading>Hey, nice to see you, Welcome to the Books React application!</Alert.Heading>
      <p>
        This is a simple app to manage your book collection.
      </p>
      <hr />
      <p className="mb-0">
        Enjoy your reading journey!
      </p>
    </Alert>
  );
}

export default Welcome;
