function Button(){
    
    const handleclick=(e)=> e.target.textContent="HELLO";
    return (<button className="button" onClick={(e)=>handleclick(e)} > Sign in  </button>);
}

export default Button