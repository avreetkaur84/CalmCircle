import React from 'react'
import image from "../Images/HowWorks.png"

function Card(props) {
    return (
        <div className="border bg-slate-100 rounded-md p-4 mb-4 shadow-md hover:shadow-2xl">
            <div className="flex justify-between">
                <div className=""><h1 className='text-xl font-bold py-4'>{props.title}</h1></div>
                <div className=""><button className='text-green-500 front-semibold py-4'>Read More...</button></div>
            </div>
            <p className='text-gray-600 pb-2'>{props.description}</p>
        </div>
    );
}

function HowItWorks() {
    return (
        <div>
            <div className='py-10'>
                <h1 className='text-4xl pb-16 font-bold font-serif text-center'>How it Works</h1>
                <div className="flex relative">
                    <div className="w-1/2 mx-16 mt-20">
                        <div className="">
                            <Card title="Sign Up" description="Create your account on CalmCircle by signing up with your email address and password. Once registered, you'll gain access to a supportive community focused on mental health and well-being." />
                        </div>
                        <div className="">
                            <Card title="Explore Features" description="Discover the various features of CalmCircle, including anonymous messaging, curated resources, private messaging, user posts and feeds, journaling, and guided activities. Dive into each feature to find support, inspiration, and tools for your mental wellness journey." />
                        </div>
                    </div>
                    <div className="w-1/2 mb-4">
                        <img src={image} alt="" />
                    </div>
                </div>

                <div className="flex mx-16">
                    <div className="w-1/2">
                        <Card title="Connect with Others" description="Engage in meaningful conversations, share experiences, and connect with others who understand and support you. Build connections, find solidarity, and foster a sense of belonging within the CalmCircle community." />
                    </div>
                    <div className="w-1/2 ml-6">
                        <Card title="Start Your Journey" description="Begin your journey to mental well-being by accessing resources, participating in activities, and journaling your thoughts and feelings. Take small steps every day to prioritize your mental health and cultivate a sense of inner peace." />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default HowItWorks


{/* <div className="">
                                <Card title="Sign Up" description="Create your account on CalmCircle by signing up with your email address and password." />
                            </div>
                            <div className="">
                                <Card title="Explore Features" description="Discover the various features of CalmCircle, including anonymous messaging, curated resources, and guided activities." />
                            </div>
                             */}