import PropTypes from "prop-types";


export default function Footer({name="Hasan"}) {
  Footer.propTypes = {
    name: PropTypes.string.isRequired,
  }
  return (
    <footer className='bg-blue-950 rounded text-white py-3 px-5'>
        <h1>Developed By  {name}</h1>
    </footer>
  )

 
}
