import PropTypes from "prop-types"
import Button from './Button'
const header = (prop) => {
    const onClick = () =>{
        console.log('Click');
    }
  return (
    <header className='header'>
      <h1 >{prop.title}</h1>
      <Button color='green'text='Add' onClick={onClick}/>
    </header>
  );
};

    header.defaultProps = {
    title: "Task Tracker",
};
header.propTypes = {
  title: PropTypes.string.isRequired,
};
//Css in JS
const headingStyle = {
  color: "red",
  backgroundColor: "pink",
  display: "inline",
};
export default header;
