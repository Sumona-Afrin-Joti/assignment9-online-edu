import React from 'react';
import AchieveGoal from '../AchieveGoal/AchieveGoal';
import Footer from '../Footer/Footer';
import Header from '../Header/Header';
import Service from '../Service/Service';
const Home = () => {
    return (
        <>
        <Header></Header>
            <div className="mt-5">
                <AchieveGoal></AchieveGoal>

                <div className="mt-5">
                    <Service></Service>
                </div>

            </div>

            <Footer></Footer>
        </>


    );
};

export default Home;