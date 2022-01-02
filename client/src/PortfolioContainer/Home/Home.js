import React, {useEffect} from 'react';
import Header from './Header/Header';
import Profile from './Profile/Profile';
import Footer from './Footer/Footer';
import { useCookies } from "react-cookie";
import './Home.css';
import { rsa, logout, logout2 } from '../../Components/rsa';


export default function Home() {

    const [cookies, setCookie, removeCookie] = useCookies(["user"]);

    useEffect(async() => {
        const logoutStatus = await logout();
        if(logoutStatus) {
            logout2();
            removeCookie("rsa");
            removeCookie("utoken");
            removeCookie("otp");
        }

        if(!(cookies.otp && cookies.utoken)){
            const rsaToken = await rsa();
            setCookie("rsa", rsaToken, { maxAge: 3600 });
        }
    }, [])

    return (
        <div className='home-container'>
            <Header />
            <Profile />
            <Footer />
        </div>
    )
}
