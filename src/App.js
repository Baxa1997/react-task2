import { useEffect, useState } from 'react';
import './App.css';
import axios from 'axios';
import Jobtype from './components/JobType/jobtype';
import Userlist from './components/Userlists/userlist';

function App() {
  const [users, setUsers] = useState([]);
  const [selectType, setSelectType] = useState([])
  
  const getUsers = () => {
    axios
    .get('https://624b0e2171e21eebbcec0e9d.mockapi.io/api/v1/users')
    .then(res => {
      console.log(res.data);
      setUsers(res.data)
    })
    .catch((err) => {
      console.log('Error', err);
    })
  }
  
  const getTypes = () => {
    axios
    .get('https://624b0e2171e21eebbcec0e9d.mockapi.io/api/v1/types')
    .then(res => {
      console.log(res.data);
      setSelectType(res.data)
    })
    .catch((err) => {
      console.log('Error Types', err);
    })
  }
  
  useEffect(() => {
    getUsers();
    getTypes();
  }, [])
  
  const DeleteUserChosen = (id) => {
    axios
      .delete(`https://624b0e2171e21eebbcec0e9d.mockapi.io/api/v1/users/${id}`)
      .then((res) => {
        getUsers();
      })
      .catch((err) => {
        console.log(err);
      });

  }
  
  const DeleteChosenTypes = (id) => {
    axios
    .delete(`https://624b0e2171e21eebbcec0e9d.mockapi.io/api/v1/types/${id}`)
    .then(res => getTypes())
    .catch(err => console.log('Error type delete', err))
  }
  
  // Initial Values
  const initialValues = {
    user_infos: {
      firstName: '',
      lastName: '',
      phoneNumber: '',
      email: '',
      dateBirth: ''
    },
    work_infos: {
      companyname: '',
      jobType: '',
      experience: ''
    }
  }
  
  const initialSelectValues = {
    label: '',
    value: ''
  }
  
    const [values, setValues] = useState(initialValues);
  // OnSubmit User_infos and Work_infos UsesStates
  const [user_infos, setUserInfos] = useState(initialValues.user_infos)
  const [work_infos, setWorkInfos] = useState(initialValues.work_infos)
  const [selectedValue, setSelectValue] = useState(initialSelectValues)
    console.log(selectedValue);
  // Onsubmit for form 1
  const onSubmit = (e) => {
    e.preventDefault();
    const formData = {
      user_infos,
      work_infos
    }
    // Axios post 
    axios
    .post('https://624b0e2171e21eebbcec0e9d.mockapi.io/api/v1/users', formData)
    .catch((error) => console.log('Error', error))
    .finally(() => {
      setUserInfos(initialValues.user_infos)
      setWorkInfos(initialValues.work_infos)
      getUsers()
    })
  }
  
  const OnApplyForm = (e) => {
    e.preventDefault();
    console.log('e');
    const selectValue = {
      ...selectedValue,
      work_infos
    }
    axios.post('https://624b0e2171e21eebbcec0e9d.mockapi.io/api/v1/types', selectValue)
    .catch(err => console.log('Error type', err))
    .finally(() => {
      getTypes();
      
    })
  }
  
  const reload = () => {
    window.reload()
  }
  
 
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
                    id='firstName'
                    required
                    value={user_infos.firstName}
                    onChange={(e) => setUserInfos({...user_infos, firstName: e.target.value})}
                  />
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
                    onChange={(e) => setUserInfos({...user_infos, lastName: e.target.value})}
                  />
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
                    onChange={(e) => setUserInfos({...user_infos, phoneNumber: e.target.value})}
                  />
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
                    onChange={(e) => setUserInfos({...user_infos, email: e.target.value})}
                  />
                </div>
                <div className="field">
                  <label htmlFor="dateBirth">Date of birth</label>
                  <input type="date" 
                    className='forminput'
                    name="dateBirth"
                    id='dateBirth'
                    required
                    value={user_infos.dateBirth}
                    onChange={(e) => setUserInfos({...user_infos, dateBirth: e.target.value})}
                    />
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
                    value={work_infos.companyname}
                    onChange={(e) => setWorkInfos({...work_infos, companyname: e.target.value})}
                  />
                </div>  
              <div className="inputDetails">
                  <label htmlFor="jobType">Job Type</label>
                  <select name="jobType" id="jobType"  onChange={(e) => setWorkInfos({...work_infos, jobType: e.target.value})}>
                    <option value="Web Developer">Web Developer</option>
                    <option value="Web Designer">Web Designer</option>
                    <option value="QA">QA</option>
                    <option value="Full-stack">Full-stack</option>
                    <option value="Software Engineer">Software Engineer</option>
                    <option value="Frontend Developer">Frontend Developer</option>
                    <option value="Backend Developer">Backend Developer</option>
                    <option value="Other">Other</option>
                  {/* value={work_infos.jobType} */}
                  </select>
                </div>  
              <div className="inputDetails">
                  <label htmlFor="experience">Experience</label>
                  <select name="experience" id="experience" value={work_infos.experience} onChange={(e) => setWorkInfos({...work_infos, experience: e.target.value})}>
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
                    value={work_infos.jobType}
                    
                  />
                  
                  <button className='secCancelBtn' type="button" onClick={() => work_infos.jobType == ''}>Cancel</button>
                  <button className='secondBtn' type="button" onClick={ OnApplyForm }>Save</button>
              </form>
            </div>
          </div>
          </div>
                
          <div className="line2"></div>        
          <div className="firstFormBtns">
          <button type="button" className="firstCancelBtn" onClick={getUsers}>Cancel</button>
          <button type="submit" className='firstBtn'>Save</button>
         </div>    
        </form>
          <Userlist users={users} DeleteUserChosen={DeleteUserChosen}/>
          <Jobtype selectType={selectType} DeleteChosenTypes={DeleteChosenTypes}/>
    </div>
  );
}

export default App;
