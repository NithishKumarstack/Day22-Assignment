import './head.css'; 
const Head = () => {
    return(
       <div className='container'>
        <h1>Generate more leads with a professional landing page!</h1>
        <div>
        <input type="emial" placeholder="Email Address" required/>
        <button type='submit' required>Submit</button>
        </div>
       </div>
    )
};

export default Head;