import React, { useEffect, useState } from 'react';
import AllToysRow from './AllToysRow';

const AllToys = () => {
    const [toys, setToys] = useState([]);
    const [searchText, setSearchText] = useState("");
    useEffect(() => {
        fetch('http://localhost:5000/allToy')
            .then(res => res.json())
            .then(data => setToys(data))
    }, [])

    const handleSearch = (toyName) => {
        fetch(`http://localhost:5000/toysSearch/${toyName}`)
            .then(res => res.json())
            .then(data => setToys(data))
    }

    return (
        <div className='my-8'>
            <div className='flex justify-center mb-4'>
                <div className="form-control">
                    <div className="input-group">
                        <input onChange={(e) => setSearchText(e.target.value)} type="text" placeholder="Search…" className="input input-bordered" />
                        <button onClick={() => handleSearch(searchText)} className="btn btn-square">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" /></svg>
                        </button>
                    </div>
                </div>
            </div>
            <div className="overflow-x-auto w-full">
                <table className="table w-full">
                    {/* head */}
                    <thead>
                        <tr>
                            <th>Name & Price</th>
                            <th>Category & Quantity</th>
                            <th>Seller</th>
                            <th>Details</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            toys.map(toy => <AllToysRow key={toy._id} toy={toy}></AllToysRow>)
                        }
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default AllToys;