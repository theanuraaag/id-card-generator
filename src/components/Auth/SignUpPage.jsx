import React from 'react';
import { SignUp } from '@clerk/clerk-react';
import Header from '../Header';

const SignUpPage = () => {

    const signUpAppearance = {
        elements: {
            formButtonPrimary: 'bg-blue-600 hover:bg-blue-700 text-white',
            formInput: 'px-4 py-2 border border-gray-300 rounded-md',
            formTitle: 'text-2xl font-semibold text-blue-700',
            formDescription: 'text-lg text-gray-600',
        },
    };



    return (
        <div className="h-screen flex flex-col">
            <Header/>
            <div className="flex-grow flex items-center justify-center bg-gray-100">
                <div className="w-full max-w-md p-8 space-y-6 bg-white shadow-lg rounded-lg">

                    <SignUp
                        appearance={signUpAppearance}
                        signInUrl="/sign-in" // Redirects to your custom sign-in page
                    />
                </div>
            </div>
        </div>

    );
};

export default SignUpPage;
