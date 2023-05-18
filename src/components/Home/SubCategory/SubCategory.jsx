import React, { useEffect, useState } from 'react';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import CategoryCard from './CategoryCard';

const SubCategory = () => {

    const [civil, setCivil] = useState([]);
    const [chemistry, setChemistry] = useState([]);
    const [physics, setPhysics] = useState([]);


    useEffect(() => {
        fetch(`http://localhost:5000/getToy/${'Civil Engineering'}`)
            .then(res => res.json())
            .then(data => setCivil(data))
    }, [])

    const handleCategory = (category) => {
        fetch(`http://localhost:5000/getToy/${category}`)
            .then(res => res.json())
            .then(data => {
                if (category === 'Civil Engineering') {
                    setCivil(data);
                }
                if (category === 'Chemistry Equipment') {
                    setChemistry(data);
                }
                if (category === 'Physics Equipment') {
                    setPhysics(data);
                }
            })
    }
    return (
        // selectedTabClassName='text-white rounded-md bg-blue-400'
        // className="text-center text-xl"
        <div className='mb-8'>
            <Tabs selectedTabClassName='my-btn-bg rounded-md text-white'>
                <TabList className='text-center mb-8 text-gray-500 text-xl font-medium'>
                    <Tab onClick={() => handleCategory('Civil Engineering')}>Civil Engineering</Tab>
                    <Tab onClick={() => handleCategory('Chemistry Equipment')}>Chemistry Equipment</Tab>
                    <Tab onClick={() => handleCategory('Physics Equipment')}>Physics Equipment</Tab>
                </TabList>

                <TabPanel>
                    <div className='grid md:grid-cols-3'>{civil.map(category => <CategoryCard key={category._id} category={category}></CategoryCard>)}</div>
                </TabPanel>
                <TabPanel>
                    <div className='grid md:grid-cols-3'>{chemistry.map(category => <CategoryCard key={category._id} category={category}></CategoryCard>)}</div>
                </TabPanel>
                <TabPanel>
                    <div className='grid md:grid-cols-3'>{physics.map(category => <CategoryCard key={category._id} category={category}></CategoryCard>)}</div>
                </TabPanel>
            </Tabs>
        </div>
    );
};

export default SubCategory;