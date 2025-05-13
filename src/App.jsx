import React from 'react';
import { Routes, Route, BrowserRouter } from 'react-router-dom';
import LandingPage from './pages/LandingPage';
import Generator from './pages/Generator';
import { ClerkProvider, RedirectToSignIn, SignedIn, SignedOut,  SignIn,
  SignUp, UserButton,
  useClerk, } from "@clerk/clerk-react";
import SignInPage from './components/Auth/SignInPage.jsx';
import SignUpPage from './components/Auth/SignUpPage.jsx';

const PUBLISHABLE_KEY = import.meta.env.VITE_CLERK_PUBLISHABLE_KEY

function ProtectedRoute({ children }) {
  return (
    <>
      <SignedIn>{children}</SignedIn>
      <SignedOut>
        <RedirectToSignIn />
      </SignedOut>
    </>
  );
}

function App() {
  return (
    <ClerkProvider publishableKey={PUBLISHABLE_KEY}>
     
        <div className="min-h-screen bg-gray-50">
          
          <Routes>
            <Route path="/" element={<LandingPage />} />
            <Route path="/sign-in" element={<SignInPage />} />
            <Route path="/sign-up" element={<SignUpPage />} />
            <Route
              path="/generate"
              element={
                <ProtectedRoute>
                  <Generator />
                </ProtectedRoute>
              }
            />
          </Routes>
        </div>
     
    </ClerkProvider>
  );
}

export default App;
