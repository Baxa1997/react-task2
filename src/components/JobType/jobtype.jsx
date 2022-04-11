import React from 'react';
import './jobtype.css';
import DeleteIcon from '../../Assets/images/deleteIcon.png';

const Jobtype = ({selectType, DeleteChosenTypes}) => {
    console.log(selectType)
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
                   {selectType && selectType.map(types => (
                       <tbody className='jobTbody'>
                       <tr className='jobTbody'>
                       <td className='firstJobTbody'>{types?.id}</td>
                       <td className='secondJobTbody'>{types?.label}</td>
                       <td className='thirdJobTbody'><button type="button" onClick={() => DeleteChosenTypes(types?.id)}><img src={DeleteIcon} alt="" /></button></td>
                       </tr>
                       </tbody>
                   ))}
            </table>
        </div>
      </>  
    )
}


export default Jobtype;