import react from 'react';
import './home.css';
import { Link } from 'react-router-dom';

function Home()  {
    return (
        <div className='home-container'>

            <div className='hero-section'>

         <div className='hero-title'>Welcome to LoanAptech</div>

         <div className='hero-subtitle'>Get instant personal loans up to $50,000 with low interest rates and flexible repayment options. </div>
          
         <link to="/apply" className='hero-cta-btn'>Apply Now</link>
            </div>

            <div className='features-grid'>
                <div className='feature-card'>
                    <div className='feature-icon'>Lightning Fast</div>
                    <h3>Lighting Fast Approval</h3>
                    <p>Get decisions in under 10 minutes</p>
                </div>

                <div className='feature-card'>
                    <div className='feature-icon'>No Paperwork</div>
                    <h3>No Paperwork required</h3>
                    <p>100% digital & hassle-free process</p>
                </div>

                <div className='feature-card'>
                    <div className='feature-icon'>Best Rates</div>
                    <h3>Lowest Interest Rates</h3>
                    <p>starting from just 8.99% p.a</p>
                </div>
            </div>

           <div className='home-links'>
            <p>
                Already applied? {' '}
                <Link to="/status" className='home-link'>Check Loan Status</Link>
                {'.'}

                <link to='/dashboard' className='home-link'>Go to Dashboard</link>
            </p>
           </div>
        
        </div>
    );
}

export default Home;
