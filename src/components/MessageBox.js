import Alert from 'react-bootstrap/Alert';

export default function MessageBox(props) {
  return <Alert variant={props.variant || 'info'}>{props.children}</Alert>;
}
// if variant exists, then set the value to what the user entered in the props. otherwise use info as a default value
// and render the content inside the children of the alert
