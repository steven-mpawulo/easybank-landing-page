import React from 'react'
import Button from '../../common/button/Button'
import MockUps from '../../images/image-mockups.png'
import './main.css'
import ServicesCard from '../../common/servicesCard/ServicesCard'
import OnlineBanking from '../../images/icon-online.svg'
import Budgeting from '../../images/icon-budgeting.svg'
import FastOnboarding from '../../images/icon-onboarding.svg'
import OpenApi from '../../images/icon-api.svg'
import ArticleCard from '../../common/articleCard/ArticleCard'
import CurrencyImage from '../../images/image-currency.jpg'
import Plane from '../../images/image-plane.jpg'
import Restauraunt from '../../images/image-restaurant.jpg'
import Confetti from '../../images/image-confetti.jpg'


const Main = () => {
    return (
        <main>
            <div className="first-section">
                <div className="first-section-left">
                    <h1>Next generation <span className='digital-banking'>digital banking</span></h1>
                    <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Odit facere aliquid asperiores accusamus cumque. Delectus omnis quibusdam quae aspernatur explicabo sit inventore quis architecto, illum officia ipsam distinctio quisquam aliquam.</p>
                    <Button buttonText={"Request Invite"} />
                </div>
                <div className="first-section-right">
                    <img src={MockUps} alt="mock ups" className='mock-ups' />
                </div>
            </div>
            <div className="second-section">
                <h2>Why choose Easybank?</h2>
                <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Velit nulla, voluptas dolore commodi dolores tempore reprehenderit illum fugit. Debitis quod laudantium inventore cum quis architecto voluptates maxime ad impedit iste.</p>
                <div className="container-for-service-cards">
                    <ServicesCard icon={OnlineBanking} title={"Online Banking"} message={"Information goes here"} />
                    <ServicesCard icon={Budgeting} title={"Simple Budgeting"} message={"Information goes here"} />
                    <ServicesCard icon={FastOnboarding} title={"Fast Onboarding"} message={"Information goes here"} />
                    <ServicesCard icon={OpenApi} title={"Open API"} message={"Information goes here"} />
                </div>

            </div>
            <div className="third-section">
                <h2>Latest Articles</h2>
                <div className="container-for-article-cards">
                    <ArticleCard image={CurrencyImage} author={"author username"} title={"Title"} message={"Information goes here"} />
                    <ArticleCard image={Restauraunt} author={"author username"} title={"Title"} message={"Information goes here"} />
                    <ArticleCard image={Plane} author={"author username"} title={"Title"} message={"Information goes here"} />
                    <ArticleCard image={Confetti} author={"author username"} title={"Title"} message={"Information goes here"} />
                </div>
            </div>
        </main>
    )
}

export default Main