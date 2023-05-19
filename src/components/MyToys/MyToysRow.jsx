import React from 'react';
import { FaEdit, FaTrashAlt } from 'react-icons/fa';

const MyToysRow = ({ toys, handleSingleId }) => {
    const { _id, name, photoURL, price } = toys;
    return (
        <tr>
            <td>
                <div className="avatar">
                    <div className="mask mask-squircle w-16 h-16">
                        <img src={photoURL} alt="Avatar Tailwind CSS Component" />
                    </div>
                </div>
            </td>
            <td className='font-medium'>
                {name}
            </td>
            <td>$ {price}</td>
            <td className='md:w-1/4 text-center'>
                <div>
                    <button onClick={() => handleSingleId(_id)}>
                        <label htmlFor="my-modal-4" className="btn bg-transparent border-0 hover:bg-transparent">
                            <FaEdit className='text-green-500 h-6 w-7'></FaEdit>
                        </label>
                    </button>
                    <button className="btn btn-ghost btn-xs">
                        <FaTrashAlt className='text-red-500 h-6 w-7'></FaTrashAlt>
                    </button>
                </div>
            </td>
        </tr>
    );
};

export default MyToysRow;