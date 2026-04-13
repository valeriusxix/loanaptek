import React from "react";
import "./privacy.css";

const Privacy = () => {
    return(
     <div className="privacy-page">
        <div className="privacy-container">
            <h1>Privacy Policy</h1>
            <p>Last Updated: March 2025</p>

            <div className="privy-policies">
                <h1>1. Introduction</h1>
                <p>This Privacy Policy describes how we collect, use,store, and protect your personal information when youapply for or use our loan services.
                 By using this platform, you consent to the practices described in this policy.</p>
            </div>

            <div className="privy-policies">
                <h1>2. Information We Collect</h1>
                <ul className="information">
                    <li>Personal details(full name, email address, phone number)</li>
                    <li>Identification information required for loan processing</li>
                    <li>Financial Information(income details, bank account data)</li>
                    <li>Loan application and repayment history</li>
                </ul>
           </div>

           <div className="privy-policies">
                <h1>3. How We Use Your Information</h1>
                <ul className="information">
                    <li>To evaluate loan eligibility and creditworthiness</li>
                    <li>To process and manage your loan application and repayment</li>
                    <li>To verify identity and prevent fraud</li>
                    <li>To comply with regulatory and legal obligations</li> 
                    <li>To communicate important account and updates</li>
                </ul>
           </div>

              <div className="privy-policies">
                <h1>4. Data Sharing and Disclosure</h1>
                <p>We do not sell your personal data. 
                Information may be shared with financial institutions, payment processors,credit bureaus, and regulatory authorities strictly for loan processing, compliance, and fraud prevention </p>
                </div>

                <div className="privy-policies">
                    <h1>5. Cookies and Tracking</h1>
                    <p>we use cookiws and similar technologies, including secure HTTP-only cookies, to manage user sessions, protect accounts, and improve platform performance.
                        You may manage cookie preferences through your browser settings.</p>
                </div>

                <div className="privy-policies">
                    <h1>6. Data Security</h1>
                    <p>We apply appropriate technical and organizational security measures to protect your personaland financial data. Despite these 
                        measures,no electronic storage or transmission method is completely secure.</p>
                </div>

                <div className="privy-policies">
                    <h1>7. Data Retention</h1>
                    <p>We retain your personal information only as long as necessary to fulfill loan services, comply with legal requirements, and 
                         resolve disputes.</p>
                </div>

                <div className="privy-policies">
                    <h1>8. Your Rights</h1>
                    <p>Subject to applicable laws, you may request access, correction, or deletion of your personal information.</p>
                </div>

                <div className="privy-policies">
                    <h1>9.Contact Us</h1>
                    <p>If you have questions about this Privacy Policy , please contact our support team through the official channels provided on this platform.</p>
                </div>

            </div>

            </div>
            
    )
};

export default Privacy;