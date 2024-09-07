import {Routes, Route} from 'react-router-dom';

import Auth_Layout from './_auth/Auth_Layout';
import SigninForm from './_auth/Forms/SigninForm';
import SignupForm from './_auth/Forms/SignupForm';

import Root_Layout from './_root/Root_Layout';
import {Home} from './_root/pages';
import './Globals.css';

const App = () => {
  return (
    <main className="flex h-screen">
        <Routes>
            {/*Public Routes*/}
            <Route element={<Auth_Layout/>}>
                <Route path="/sign-in" element={<SigninForm />} />
                <Route path="/sign-up" element={<SignupForm />} />
            </Route>
            
            {/*Private Routes*/}
            <Route element={<Root_Layout />}>
                <Route index element={< Home />} />
            </Route>
        </Routes>
    </main>
  )
}

export default App