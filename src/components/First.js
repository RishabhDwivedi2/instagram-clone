import React from 'react'

function First(props) {
    const [state, setState] = React.useState({username: "", password:""})
  
    const handleChange = (e) =>{
        const {name, value} = e.target
        setState(prevState =>({
            ...prevState, [name]:value
        }))
    }

    // const handleClick = () =>{
    //     if(state.username=="Rishu.253" && state.password=="Rishu.253")
    //     {
    //         alert("Welcome Rishu!")
    //         // setState(props.myState)            
    //     }
    // }

    console.log(state);
    const handleSubmit = (e) =>{
        e.preventDefault()
        if(state.username=="Rishu")
        {
            alert("welcome")
        }
    }
    return (
    <div className='first-container'>
        <div className='first-left'>
            <img className='first-phone-1' src='./images/phone.png'></img>
            <img className='first-ss' src='./images/ss.jpg'></img>
            <img className='first-phone-2' src='./images/smartphone.png'></img>
        </div>
        <div className='first-right'>
            <img className='first-ig-banner' src='./images/igg.png'></img>
            <form>
            <input type="text" placeholder='Phone number, username, or email' name="username" onChange={handleChange} value={state.username} required></input>
            <input type="password" placeholder='Password' onChange={handleChange} name="password" value={state.password} required></input>
            <button onSubmit={handleSubmit} onClick={props.firstClick} className='first-btn'>Log In</button>
            </form>
            <div className='first-or'>
                <hr></hr>
                <h4>OR</h4>
                <hr></hr>
            </div>
            <div className='first-section-1'>
                <div className='first-fb'>
                    <img className='first-fb-icon' src='./images/facebook.png'></img>
                    <a href='#' className='first-fb-login'>Log in with Facebook</a>
                </div>
                <a href='#' className='first-pass-forgot'>Forgotten your password?</a>
            </div>
            <div className='first-section-2'>
                <p className='first-section-para'>Don't have an account?<a href='#' className='first-signup'>Sign up</a></p>
            </div>
            <div className='first-section-3'>
                <h5>Get the app</h5>
                <img src='./images/app-links.png' className='first-links'></img>
            </div>
        </div>
    </div>
  )
}

export default First