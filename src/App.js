import './App.css';
import {useState} from 'react'
import List from './Components/List';

function App() {
  const [name, setName] = useState('')
  const [lname, setLname] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [confirmPassword, setConfirmPassword] = useState('')
  const [hasBeenSubbmited, setHasBeenSubbmited] = useState(false)

  const [nameError, setNameError] = useState('');
  const [lnameError, setLnameError] =useState('');
  const [emailError ,setEmailError] = useState('');
  const [passwordError, setPasswordError] = useState('');
  const [confirmPasswordError, setConfirmPasswordError] = useState('');

  const handleName = (e) =>{
    setName(e.target.value);
    if(e.target.value.length <=2){
      setNameError("Name must be more than 2 characters")
    }else{
      setNameError('');
    }
  }
  const handleLname = (e) =>{
    setLname(e.target.value);
    if(e.target.value.length<=2){
      setLnameError("Last Name must be more than 2 characters")
    }else{
      setLnameError('');
    }
  }
  const handleEmail = (e) =>{
    setEmail (e.target.value);
    if(e.target.value.length <=2){
      setEmailError("Email must be more than 2 characters long")
    }else{setEmailError('')};
  }
  const handlePassword = (e) =>{
    setPassword (e.target.value);
    if(e.target.value.length <8){
      setPasswordError("Password must be at least 8 characters")
    }else{setPasswordError('')};
  }
  const handleConfirmPassword = (e) =>{
    setConfirmPassword (e.target.value);
        if(e.target.value !== password ){
          setConfirmPasswordError("Passwords must match")
        }else{setConfirmPasswordError('')};
  }




  const preventDefault = (e) =>{
    console.log(e);
    e.preventDefault();
    setHasBeenSubbmited(true);
  }


  return (
    <div className='App'>
      {
        hasBeenSubbmited ?
        <h3>Thank you for subbmiting the form!</h3>:
        <h3>Welcome,please submit the form.</h3>
      }
      <form onSubmit={preventDefault}>
        <div >
            <label>First Name</label>
            <input type={'text'} onChange={handleName}/>
            {
              nameError ?
              <p>{nameError}</p>:
              ''
            }
          </div>
        <div >
          <label>Last Name</label>
          <input type={'text'} onChange={handleLname} />
          {
            lnameError ?
            <p>{lnameError}</p>
            : ''
          }
        </div>
        <div >
          <label>Email</label>
          <input type={'email'} onChange={handleEmail}/>
          {
            emailError ?
            <p>{emailError}</p>
            : ''
          }
        </div>
        <div >
          <label> Password</label>
          <input type={'password'} onChange={handlePassword} />
          {
            passwordError ?
            <p>{passwordError}</p>
            : ''
          }
        </div>
        <div >
          {
            confirmPasswordError ?
            <p>{confirmPasswordError}</p>
            : ''
          }
          <label>Confirm Password</label>
          <input type={'password'} onChange = {handleConfirmPassword}/>
        </div>
          {
            nameError ||lnameError||emailError||passwordError||confirmPasswordError?
            <input type="submit" value={"submit"} disabled/>
            : <input type="submit" value="submit"/>
          }
      </form>

      <List name={name} lastname={lname} email={email} password={password} confirmpassword={confirmPassword}/>

    </div>
  );
}

export default App;
