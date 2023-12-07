import './footer.css';
const Footer = () => {
    return(
    <div className='container'>
        <h1>Ready to get started? Sign up now!</h1>
        <div>
        <input type="emial" placeholder="Email Address" required/>
        <button type='submit'>Submit</button>
        </div>
    </div>
    )
};

export default Footer;