import Form from 'react-bootstrap/Form';
import 'bootstrap/dist/css/bootstrap.min.css';

function ThemeContext() {
  return (
    <div className="d-flex justify-content-center align-items-center m">
      <div>
        <p className='mb-0'>Light</p>
      </div>
      <Form>
        <Form.Switch
          type="switch"
          id="custom-switch"
        />
      </Form>
      <div>
        <p className='mb-0'>Dark</p>
      </div>

    </div>
  );
}

export default ThemeContext;