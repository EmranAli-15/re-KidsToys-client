import React, { useEffect, useState } from 'react';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import CategoryCard from './CategoryCard';

const SubCategory = () => {

    const [science, setScience] = useState([]);
    const [engineering, setEngineering] = useState([]);
    const [math, setMath] = useState([]);


    useEffect(() => {
        fetch(`https://toy-server-omega.vercel.app/categoryToy/${'Science Kits'}`)
            .then(res => res.json())
            .then(data => setScience(data))
    }, [])

    const handleCategory = (category) => {
        fetch(`https://toy-server-omega.vercel.app/categoryToy/${category}`)
            .then(res => res.json())
            .then(data => {
                if (category === 'Science Kits') {
                    setScience(data);
                }
                if (category === 'Math Learning Toys') {
                    setEngineering(data);
                }
                if (category === 'Engineering Tools') {
                    setMath(data);
                }
            })
    }
    return (
        // selectedTabClassName='text-white rounded-md bg-blue-400'
        // className="text-center text-xl"
        <div className='mb-8'>
            <h1 className='text-center text-5xl mb-6 font-serif font-semibold'>Shop by category</h1>
            <Tabs selectedTabClassName='my-btn-bg rounded-md text-white'>
                <TabList className='text-center mb-8 text-gray-500 text-xl font-medium'>
                    <Tab onClick={() => handleCategory('Science Kits')}>Science Kits</Tab>
                    <Tab onClick={() => handleCategory('Math Learning Toys')}>Math Learning Toys</Tab>
                    <Tab onClick={() => handleCategory('Engineering Tools')}>Engineering Tools</Tab>
                </TabList>

                <TabPanel>
                    <div className='grid grid-cols-2 px-2 md:grid-cols-3 gap-2 md:gap-8'>{science.map(category => <CategoryCard key={category._id} category={category}></CategoryCard>)}</div>
                </TabPanel>
                <TabPanel>
                    <div className='grid grid-cols-2 px-2 md:grid-cols-3 gap-2 md:gap-8'>{engineering.map(category => <CategoryCard key={category._id} category={category}></CategoryCard>)}</div>
                </TabPanel>
                <TabPanel>
                    <div className='grid grid-cols-2 px-2 md:grid-cols-3 gap-2 md:gap-8'>{math.map(category => <CategoryCard key={category._id} category={category}></CategoryCard>)}</div>
                </TabPanel>
            </Tabs>
        </div>
    );
};

export default SubCategory;