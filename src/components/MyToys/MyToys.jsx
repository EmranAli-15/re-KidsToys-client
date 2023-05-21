import React, { useContext, useEffect, useState } from 'react';
import MyToysRow from './MyToysRow';
import { AuthContext } from '../../Providers/AuthProvider';
import Swal from 'sweetalert2';
import useTitle from '../../hooks/useTitle';

const MyToys = () => {
    useTitle('My Toys')
    const [myToys, setMyToys] = useState([]);
    const { user } = useContext(AuthContext);
    const [toyData, setToyData] = useState({});
    const { _id, price, quantity, details } = toyData

    useEffect(() => {
        fetch(`https://toy-server-omega.vercel.app/userToys?email=${user?.email}`)
            .then(res => res.json())
            .then(data => setMyToys(data))
    }, [user]);

    const handleUpdateId = (id) => {
        fetch(`https://toy-server-omega.vercel.app/singleToy/${id}`)
            .then(res => res.json())
            .then(data => setToyData(data))
    }

    const handleUpdate = (event) => {
        event.preventDefault()
        const from = event.target;

        const price = parseInt(from.price.value);
        const quantity = parseInt(from.quantity.value);
        const details = from.details.value;
        const updated = { price, quantity, details }

        Swal.fire({
            title: 'Are you sure?',
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, update it!'
        }).then((result) => {
            if (result.isConfirmed) {
                fetch(`https://toy-server-omega.vercel.app/updateToy/${_id}`, {
                    method: 'PUT',
                    headers: {
                        'content-type': 'application/json'
                    },
                    body: JSON.stringify(updated)
                })
                    .then(res => res.json())
                    .then(data => {
                        console.log(data);
                        if (data.modifiedCount === 1) {
                            Swal.fire(
                                'Updated!',
                                'Your file has been updated.',
                                'success'
                            )
                        }
                    })
            }
        })
    }

    const handleDelete = (id) => {
        console.log(id);
        Swal.fire({
            title: 'Are you sure?',
            text: "You won't be able to revert this!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, delete it!'
        }).then((result) => {
            if (result.isConfirmed) {
                fetch(`https://toy-server-omega.vercel.app/deleteToy/${id}`, {
                    method: 'DELETE'
                })
                    .then(res => res.json())
                    .then(data => {
                        if (data.deletedCount === 1) {
                            Swal.fire(
                                'Deleted!',
                                'Your file has been deleted.',
                                'success'
                            )
                        }
                    })
            }
        })
    }

    const handleSorting = (event) => {
        const value = event.target.value;
        let no;
        if (value === 'low price') {
            no = 1
        }
        else {
            no = -1
        }
        fetch(`https://toy-server-omega.vercel.app/sortToys?email=${user?.email}&sort=${no}`)
            .then(res => res.json())
            .then(data => setMyToys(data))
    }

    return (
        <>
            <div className='flex justify-end mt-4'>
                <select onChange={handleSorting} className="select select-bordered select-sm">
                    <option value='default'>Default</option>
                    <option value='low price'>low Price</option>
                    <option value='high price'>high price</option>
                </select>
            </div>
            <div className="overflow-x-auto w-full mt-4 mb-8">
                <table className="table w-full">
                    {/* head */}
                    <thead>
                        <tr>
                            <th className='md:w-1/4'>Photo</th>
                            <th className='md:w-1/4'>Name</th>
                            <th className='md:w-1/4'>Price</th>
                            <th className='md:w-1/4 text-center'>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            myToys.map(toys => <MyToysRow handleUpdateId={handleUpdateId} handleDelete={handleDelete} key={toys._id} toys={toys}></MyToysRow>)
                        }
                    </tbody>
                </table>
            </div>

            <input type="checkbox" id="my-modal-4" className="modal-toggle" />
            <label htmlFor="my-modal-4" className="modal cursor-pointer">
                <label className="modal-box relative" htmlFor="">
                    <form onSubmit={handleUpdate}>
                        <div className="form-control">
                            <label className="input-group">
                                <span className='w-32'>Price</span>
                                <input type="text" name="price" defaultValue={price ? price : ''} className="input input-bordered" />
                            </label>
                        </div>
                        <div className="form-control my-6">
                            <label className="input-group">
                                <span className='w-32'>Quantity</span>
                                <input type="text" name="quantity" defaultValue={quantity ? quantity : ''} className="input input-bordered" />
                            </label>
                        </div>
                        <textarea name="details" defaultValue={details ? details : ''} className="textarea textarea-bordered w-full" placeholder="Bio"></textarea>
                        <div className='text-right'>
                            <input className='btn btn-sm bg-blue-500 hover:bg-[#FF3811] border-0' type="submit" value="Ok!" />
                        </div>
                    </form>
                </label>
            </label>
        </>
    );
};

export default MyToys;