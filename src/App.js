import { useEffect, useState } from 'react';
import './App.css';
import axios from 'axios';
import Jobtype from './components/JobType/jobtype';
import Userlist from './components/Userlists/userlist';

function App() {
const [users, setUsers] = useState([]);
const [types, setTypes] = useState([]);
const [formError, setFormError] = useState({});
const [isSubmit, setIsSubmit] = useState(false);


const getUsers = () => {
  axios
  .get('https://624b0e2171e21eebbcec0e9d.mockapi.io/api/v1/users')
  .then((response) => setUsers(response.data))
  .catch((err) => {
    console.log('Error in users', err);
  })
}
  
const getTypes = () => {
  axios
  .get('https://624b0e2171e21eebbcec0e9d.mockapi.io/api/v1/types')
  .then((response) => setTypes(response.data))
  .catch((err) => {
    console.log('Error in Types', err);
  })
}
  
useEffect(() => {
  getUsers();
  getTypes();
}, []);  


// Delete Users
const deleteUsers = (id) => {
  axios
  .delete(`https://624b0e2171e21eebbcec0e9d.mockapi.io/api/v1/users/${id}`)
  .then(resp => getUsers())
  .catch(err => console.log('Error in deleting users', err))
}

// Delete Type of Job list
const deleteTypes = (id) => {
  axios
  .delete(`https://624b0e2171e21eebbcec0e9d.mockapi.io/api/v1/types/${id}`)
  .then(res => getTypes())
  .catch(err => console.log('Error in deleting Types', err))
}



// Intial Values of Axios request
const initialValues = {
  user_infos: {
    firstName: '',
    lastName: '',
    phoneNumber: '',
    email: '',
    dateBirth: ''
  },
  work_infos: {
    companyName: '',
    jobType:'',
    experience: ''
  }
}
const [values, setValues] = useState(initialValues);

const [user_infos, setFormUserInfos] = useState(initialValues.user_infos);
const [work_infos, setFormWorkInfos] = useState(initialValues.work_infos);

const initialTypes = {
  label: '',
  value: ''
}
const [typeValue, setTypevalue] = useState(initialTypes);

const onSubmit = (e) => {
  e.preventDefault();
  setFormError(validate(formError)); // !
  setIsSubmit(true);
  const formData = {
    user_infos,
    work_infos
  }
    setFormError(true);
    axios
  .post('https://624b0e2171e21eebbcec0e9d.mockapi.io/api/v1/users', formData)
  .then(response => console.log(response.data))
  .catch(err => console.log('Error ocurred in post user infos', err))
  .finally(() => {
    getUsers();
    setFormUserInfos(initialValues.user_infos)
    setFormWorkInfos(initialValues.work_infos)
  })
  
}
useEffect(() => {
  console.log(formError);
    if(Object.keys(formError).length === 0 && isSubmit) {
      console.log(values);
    }
}, [formError])

const validate = () => {
  const errors = {};
  if(!user_infos.firstName){
  errors.firstName = 'Firstname is required'
  }else if(user_infos.firstName.length <= 3) {
    errors.firstName = 'Firstname should be at least 3 characters!'
  }
  if(!user_infos.lastName){
  errors.lastName = 'Lastname is required'
  }
  if(!user_infos.email){
  errors.email = 'Email Address is required'
  }
  if(!user_infos.phoneNumber){
  errors.phoneNumber = 'Phonenumber is required'
  } else if (user_infos.phoneNumber <= 6 ) {
    errors.phoneNumber = 'Phonenumber should be at least 7 numbers'
  }
  if(!user_infos.dateBirth){
  errors.dateBirth = 'Date of birth is required'
  }
  if(!work_infos.companyName){
  errors.companyName = 'Company name is required'
  }
  return errors;
}



const onSubmit2 = (e) => {
  e.preventDefault();
  console.log('Deon');
  axios
  .post('https://624b0e2171e21eebbcec0e9d.mockapi.io/api/v1/types', typeValue)
  .then(res => console.log(res.data))
  .catch(err => console.log('Error in post types', err))
  .finally(() => {
    getTypes();
    setTypevalue(initialTypes);
  })
}

console.log(typeValue.label);

  return (
    <div className="App">
      <form  className='firstForm' onSubmit={onSubmit}>
         <div className="content">
         <div className="usersInfo"> 
                <h2>User's Info</h2>
                <div className="line"></div>
                <div className="field">
                  <label htmlFor="firstName">Name</label>
                  <input type="text" 
                    className='forminput'
                    placeholder='Name'
                    name="firstName"
                    id="firstName"
                    required
                    value={user_infos.firstName}
                    onChange={(e) => setFormUserInfos({...user_infos, firstName: e.target.value})}
                  />
                  <p className='error'>{formError.firstName}</p>
                </div>
                <div className="field">
                  <label htmlFor="lastName">Surname</label>
                  <input type="text" 
                    className='forminput'
                    placeholder='Lastname'
                    name="lastName"
                    id='lastName'
                    required
                    value={user_infos.lastName}
                    onChange={(e) => setFormUserInfos({...user_infos, lastName: e.target.value})}
                  />
                  <p className='error'>{formError.lastName}</p>
                </div>
                <div className="field">
                  <label htmlFor="phoneNumber">Phone Number</label>
                  <input type="text" 
                    className='forminput'
                    placeholder='Phone Number'
                    name="phoneNumber"
                    id='phoneNumber'
                    required
                    value={user_infos.phoneNumber}
                    onChange={(e) => setFormUserInfos({...user_infos, phoneNumber: e.target.value})}
                  />
                  <p className='error'>{formError.phoneNumber}</p>
                </div>
                <div className="field">
                  <label htmlFor="email">Email</label>
                  <input type="email" 
                    className='forminput'
                    placeholder='Email'
                    name="email"
                    id='email'
                    required
                    value={user_infos.email}
                    onChange={(e) => setFormUserInfos({...user_infos, email: e.target.value})}
                     />
                      <p className='error'>{formError.email}</p>
                </div>
                <div className="field">
                  <label htmlFor="dateBirth">Date of birth</label>
                  <input type="date" 
                    className='forminput'
                    name="dateBirth"
                    id='dateBirth'
                    required
                    value={user_infos.dateBirth}
                    onChange={(e) => setFormUserInfos({...user_infos, dateBirth: e.target.value})}
                    />
                    <p className='error'>{formError.dateBirth}</p>
                </div>  
            </div>
            
         <div className="sidebar">
          <div className="workDetails">
              <h2>Work Details</h2>
              <div className="line"></div>
              <div className="inputDetails">
                  <label htmlFor="companyname">Company Name</label>
                  <input type="text" 
                    className='forminput'
                    name="companyname"
                    id='companyname'
                    required
                    placeholder='Company Name'
                    value={work_infos.companyName}
                    onChange={(e) => setFormWorkInfos({...work_infos, companyName: e.target.value})}
                  />
                  <p className='error'>{formError.companyName}</p>
                </div>  
              <div className="inputDetails">
                  <label htmlFor="jobType">Job Type</label>
                  <select name="jobType" id="jobType"  onChange={(e) => setFormWorkInfos({...work_infos, jobType: e.label})}>
                    {types && types.map(types =>(
                      <option value={types?.label} key={types?.id}>{types?.label}</option>
                    ))}
                  </select>
                </div>  
              <div className="inputDetails">
                  <label htmlFor="experience">Experience</label>
                  <select name="experience" id="experience" value={work_infos.experience} onChange={(e) => setFormWorkInfos({...work_infos, experience: e.target.value})}>
                    <option value="">Choose the Year</option>
                    <option value="1 year">1</option>
                    <option value="2 years">2</option>
                    <option value="3 years">3</option>
                    <option value="4 years">4</option>
                    <option value="5 years">5</option>
                  </select>
                </div>  
            </div> 
            
          <div className="second">
            <form action="" className="secondForm">
                  <h2>Job Type</h2>
                  <div className="line"></div>
                  <label htmlFor="jobType2">Label</label>
                  <input type="text" 
                    placeholder='Job Type'
                    className='jobinput'
                    id="jobType2"
                    value={typeValue.label}
                    onChange={(e) => setTypevalue({...typeValue, label: e.target.value})}
                  />
                  
                  <button className='secCancelBtn' type="button" >Cancel</button>
                  <button className='secondBtn' type="button" onClick={onSubmit2}>Save</button>
              </form>
            </div>
          </div>
          </div>
                
          <div className="line2"></div>        
          <div className="firstFormBtns">
          <button type="button" className="firstCancelBtn">Cancel</button>
          <button type="submit" className='firstBtn'>Save</button>
         </div>    
        </form>
          <Userlist users={users}  deleteUsers={deleteUsers} />
          <Jobtype types={types} deleteTypes={deleteTypes}/>  
    </div>
  );
}

export default App;
