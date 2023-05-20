import React from 'react';
import useTitle from '../../hooks/useTitle';

const Blogs = () => {
    useTitle('Blogs')
    return (
        <div className='my-8 px-4'>
            <section>
                <h3 className='text-2xl'><span className='font-bold'>1 :</span> What is an access token and refresh token? How do they work and where should we store them on the client-side?</h3>
                <p className='ml-10 text-xl mt-2'>
                    <span className='font-semibold underline'>Refresh token :</span>  A refresh token is a special token that is used to obtain additional access tokens. This allows you to have short-lived access tokens without having to collect credentials every time one expires.
                    A refresh token is a special key that enables a client for an API or service to retrieve new access tokens without requiring the user to perform a complete login. In other words, an application can exchange a valid refresh token for a new access token.
                </p>
                <p className='ml-10 text-xl mt-2'>
                    <span className='font-semibold underline'>Access token :</span>  Access tokens are used in token-based authentication to allow an application to access an API. The application receives an access token after a user successfully authenticates and authorizes access, then passes the access token as a credential when it calls the target API. The passed token informs the API that the bearer of the token has been authorized to access the API and perform specific actions specified by the Scope that was granted during authorization.
                </p>
                <p className='ml-10 text-xl mt-2'>
                    <span className='font-semibold underline'>Where should store :</span>  As a web developer, you typically have two options for client-side token storage: localStorage (aka localStorage) and cookies. The two have different purposes, and hence different strengths and weaknesses. Cookies are intended to be read by the server, whereas localStorage can only be read by the browser.
                </p>
            </section>
            <section className='my-12'>
                <h3 className='text-2xl'><span className='font-bold'>2 :</span> Compare SQL and NoSQL databases</h3>
                <p className='ml-10 text-xl mt-2'>
                    <span className='font-semibold underline'>Here are some difference between SQL and NoSQL database :</span> <br />
                    <ol className='list-disc mt-4'>
                        <li>SQL databases are relational, and NoSQL databases are non-relational.</li>
                        <li>SQL databases use structured query language (SQL) and have a predefined schema. NoSQL databases have dynamic schemas for unstructured data.
                        </li>
                        <li>SQL databases are vertically scalable, while NoSQL databases are horizontally scalable.
                        </li>
                        <li>SQL databases are table-based, while NoSQL databases are document, key-value, graph, or wide-column stores.
                        </li>
                        <li>SQL databases are better for multi-row transactions, while NoSQL is better for unstructured data like documents or JSON.

                        </li>
                    </ol>
                </p>
            </section>
            <section>
                <h3 className='text-2xl'><span className='font-bold'>3 :</span> What is express JS and node Js ?</h3>
                <p className='ml-10 text-xl mt-2'>
                    <span className='font-semibold underline'>Express JS :</span>  Express is a minimal and flexible Node.js web application framework that provides a robust set of features for web and mobile applications.With a myriad of HTTP utility methods and middleware at your disposal, creating a robust API is quick and easy.Express provides a thin layer of fundamental web application features, without obscuring Node.js features that you know and love.
                </p>
                <p className='ml-10 text-xl mt-2'>
                    <span className='font-semibold underline'>Next JS :</span>  Next.js is a React framework that gives you building blocks to create web applications. By framework, we mean Next.js handles the tooling and configuration needed for React, and provides additional structure, features, and optimizations for your application.You can use React to build your UI, then incrementally adopt Next.js features to solve common application requirements such as routing, data fetching, integrations - all while improving the developer and end-user experience. Whether you’re an individual developer or part of a larger team, you can leverage React and Next.js to build fully interactive, highly dynamic, and performant web applications. In the next lessons, we will discuss how you can get started with React and Next.js.
                </p>
            </section>
            <section className='mt-12'>
                <h3 className='text-2xl'><span className='font-bold'>4 :</span> What is MongoDB aggregate and how does it work ?</h3>
                <p className='ml-10 text-xl mt-2'>
                    In MongoDB, aggregation operations process the data records/documents and return computed results. It collects values from various documents and groups them together and then performs different types of operations on that grouped data like sum, average, minimum, maximum, etc to return a computed result. It is similar to the aggregate function of SQL. <br /> MongoDB provides three ways to perform aggregation.
                    <ul className='list-disc mt-4'>
                        <li>Aggregation pipeline
                        </li>
                        <li>Map-reduce function
                        </li>
                        <li>Single-purpose aggregation
                        </li>
                    </ul>
                </p>
            </section>
        </div>
    );
};

export default Blogs;