import React from 'react';

const AllToysRow = ({ toy }) => {
    const { name, price, seller, quantity, category } = toy
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
                <button className="btn my-btn-right btn-xs">details</button>
            </th>
        </tr>
    );
};

export default AllToysRow;