import React from 'react';
import './jobtype.css';
import DeleteIcon from '../../Assets/images/deleteIcon.png';

const Jobtype = ({types, deleteTypes}) => {
    console.log(types)
    return (
      <>
        <div className="jobtype">
            <h2>Job Type</h2>
            <div className="line"></div>
            
            <table className="jobtypeTable">
                <thead className='jobThead'>
                    <tr className='jobThead'>
                    <th className='firstJobTh'>№</th>
                    <th className='secondJobTh'>Label</th>
                    <th className='thirdJobTh'></th>
                    </tr>
                </thead>
                   {types && types.map(types => (
                       <tbody className='jobTbody'>
                       <tr className='jobTbody'>
                       <td className='firstJobTbody'>{types?.id}</td>
                       <td className='secondJobTbody'>{types?.label}</td>
                       <td className='thirdJobTbody'>
                           <button type="button" onClick={() => deleteTypes(types?.id)}><img src={DeleteIcon} alt="" /></button>
                           </td>
                       </tr>
                       </tbody>
                   ))}
            </table>
        </div>
      </>  
    )
}


export default Jobtype;