import React from 'react';
import './userlist.css';
import DeleteIcon from '../../Assets/images/deleteIcon.png';

const Userlist = ({users, deleteUsers ,types}) => {
    console.log(types)
    return (
        <>
            <div className="userlist">
                <h2>User Lists</h2>
                <div className="line"></div>
                
                
                <table>
                    <tr className='headTr'>
                        <th className='firstTh'>№</th>
                        <th className='secondTh'>Full name</th>
                        <th className='thirdTh'>Date of birth</th>
                        <th className='fourthTh'>Phone</th>
                        <th className='fifthTh'>Email</th>
                        <th className='sixthTh'>Company name</th>
                        <th className='seventhTh'>Job Type</th>
                        <th className='eightTh'>Experience</th>
                        <th className='ninethTh'></th>
                    </tr>

                     {users && users.map((value) => (
                         <tr className='bodyTr'>
                         <td className='firstTh'>{value?.uuid}</td>
                         <td className='secondTh'>{value?.user_infos.firstName} {value?.user_infos.lastName}</td>
                         <td className='thirdTh'>{value?.user_infos.dateBirth}</td>
                         <td className='fourthTh'>{value?.user_infos.phoneNumber}</td>
                         <td className='fifthTh'>{value?.user_infos.email}</td>
                         <td className='sixthTh'>{value?.work_infos?.companyName}</td>
                         <td className='seventhTh'>{value?.work_infos?.jobType}</td>
                         <td className='eightTh'>{value?.work_infos?.experience}</td>
                         <td className='ninethTh'> 
                         <button type='button' onClick={() => deleteUsers(value?.uuid)}><img src={DeleteIcon} alt=""/>
                         </button></td>
                       </tr>
                      ))} 
                </table>
            </div>
        </>
    )
}


export default Userlist;