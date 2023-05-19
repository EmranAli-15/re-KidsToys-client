import React from 'react';
import { Link } from 'react-router-dom';

const AllToysRow = ({ toy }) => {
    const { _id, name, price, seller, quantity, category } = toy
    return (
        <tr>
            <td>
                <div>
                    <div className="font-semibold">{name}</div>
                    <div>$ {price}</div>
                </div>
            </td>
            <td>
                {category}
                <br />
                <span>{quantity}</span>
            </td>
            <td>{seller}</td>
            <th>
                <button className="btn my-btn-right btn-xs">
                    <Link to={`/toyDetails/${_id}`}>Details</Link>
                </button>
            </th>
        </tr>
    );
};

export default AllToysRow;