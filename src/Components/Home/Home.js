import React from 'react';
import AchieveGoal from '../AchieveGoal/AchieveGoal';
import Footer from '../Footer/Footer';
import Header from '../Header/Header'
import Services from '../Services/Services';
const Home = () => {
    return (
        <div className="mt-5">
            <AchieveGoal></AchieveGoal>

            <div className="mt-5">
                <Services></Services>
            </div>
            
        </div>
    );
};

export default Home;