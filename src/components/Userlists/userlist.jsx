import React from 'react';
import './userlist.css';
import DeleteIcon from '../../Assets/images/deleteIcon.png';

const Userlist = ({users, DeleteUserChosen}) => {
    
    console.log(users.map((user) => console.log(user)))
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
                    {users && users.map((user) => (
                        <tr className='bodyTr'>
                        <td className='firstTh'>{user?.uuid}</td>
                        <td className='secondTh'>{user?.user_infos?.firstName} {user?.user_infos?.lastName}</td>
                        <td className='thirdTh'>{user?.user_infos.dateBirth}</td>
                        <td className='fourthTh'>{user?.user_infos.phoneNumber}</td>
                        <td className='fifthTh'>{user?.user_infos.email}</td>
                        <td className='sixthTh'>{user?.work_infos?.companyname}</td>
                        <td className='seventhTh'>{user?.work_infos?.jobType}</td>
                        <td className='eightTh'>{user?.work_infos?.experience}</td>
                        <td className='ninethTh'> <button><img src={DeleteIcon} alt="" onClick={() =>
                        DeleteUserChosen(user?.uuid)
                        }/></button></td>
                    </tr>
                    ))}
                    {/* <tr className='bodyTr'>
                        <td className='firstTh'>1</td>
                        <td className='secondTh'>Dena Hilll</td>
                        <td className='thirdTh'>03.03.1996</td>
                        <td className='fourthTh'>+ 998 90 123 45 67</td>
                        <td className='fifthTh'>Denahill@gmail.com</td>
                        <td className='sixthTh'>Amazon</td>
                        <td className='seventhTh'>Developer</td>
                        <td className='eightTh'>5</td>
                        <td className='ninethTh'> <button><img src={DeleteIcon} alt="" /></button></td>
                    </tr> */}
                </table>
            </div>
        </>
    )
}


export default Userlist;