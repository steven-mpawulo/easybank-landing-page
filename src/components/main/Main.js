import React from 'react'
import Button from '../../common/button/Button'
import MockUps from '../../images/image-mockups.png'
import './main.css'

const Main = () => {
  return (
    <main>
        <div className="first-section">
            <div className="first-section-left">
                <h1>Next generation <span className='digital-banking'>digital banking</span></h1>
                <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Odit facere aliquid asperiores accusamus cumque. Delectus omnis quibusdam quae aspernatur explicabo sit inventore quis architecto, illum officia ipsam distinctio quisquam aliquam.</p>
                <Button buttonText={"Request Invite"}/>
            </div>
            <div className="first-section-right">
                <img src={MockUps} alt="mock ups" className='mock-ups'/>
            </div>
        </div>
        <div className="second-section"></div>
        <div className="third-section"></div>
    </main>
  )
}

export default Main