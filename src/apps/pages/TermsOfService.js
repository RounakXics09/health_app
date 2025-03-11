import React from 'react'
import BackLeftNew from '../assests/BackLeftNew.png'
import BackRight from '../assests/BackRight.png'
import { Grid2 } from '@mui/material'

function TermsOfService() {
  return (
    <Grid2 className="terms-container">
      <Grid2 className="terms-container-inner">
        <Grid2 sx={{ position: 'absolute', top: '0px', left: '0px' }}>
          <img src={BackLeftNew} />
        </Grid2>
        <Grid2 sx={{ position: 'absolute', right: '0px', top: '80px' }}>
          <img src={BackRight} />
        </Grid2>
        <h1>Terms of Service</h1>
        <p className="effective-date"><strong>Effective Date:</strong> March 20, 2025</p>

        <Grid2 className="h2" >1. Introduction</Grid2>
        <Grid2 className='p-text'>
          Welcome to <strong>WhatsApp AI Diet Planner</strong> ("we," "our," or "us").
          By accessing or using our services, you agree to comply with these Terms of Service ("Terms").
          If you do not agree, please do not use our services.
        </Grid2>

        <Grid2 className="h2" >2. Eligibility</Grid2>
        <Grid2 className='p-text'>
          To use our services, you must be at least 18 years old or have parental/guardian consent.
          By using the service, you confirm that you meet these requirements.
        </Grid2>

        <Grid2 className="h2" >3. Description of Services</Grid2>
        <Grid2 className='p-text'>
          <strong>WhatsApp AI Diet Planner</strong> provides AI-driven dietary recommendations through WhatsApp.
          Our services are for informational purposes only and should not replace professional medical or nutritional advice.
        </Grid2>

        <Grid2 className="h2" >4. User Responsibilities</Grid2>
        <ul>
          <li>Provide accurate and complete information.</li>
          <li>Use the service only for personal, non-commercial purposes.</li>
          <li>Not misuse or disrupt the service.</li>
          <li>
            Acknowledge that dietary recommendations are general suggestions and should be verified by a healthcare professional.
          </li>
        </ul>

        <Grid2 className="h2" >5. Privacy & Data Protection</Grid2>
        <Grid2 className='p-text'>
          Your use of our services is also governed by our Privacy Policy, which outlines how we collect, use, and protect your personal information.
        </Grid2>

        <Grid2 className="h2" >6. Limitation of Liability</Grid2>
        <Grid2 className='p-text'>
          We strive to provide accurate and helpful dietary guidance, but we do not guarantee specific results.
          We are not liable for any loss, damage, or adverse health effects resulting from your reliance on our recommendations.
        </Grid2>

        <Grid2 className="h2" >7. Modifications to the Service</Grid2>
        <Grid2 className='p-text'>
          We reserve the right to modify or discontinue any part of the service without prior notice.
          We are not liable for any service disruptions.
        </Grid2>

        <Grid2 className="h2" >8. Termination</Grid2>
        <Grid2 className='p-text'>
          We may suspend or terminate your access to our services if you violate these Terms or engage in misuse.
        </Grid2>

        <Grid2 className="h2" >9. Governing Law</Grid2>
        <Grid2 className='p-text'>
          These Terms are governed by the laws of [Insert Jurisdiction].
          Any disputes shall be resolved through appropriate legal channels.
        </Grid2>

        <Grid2 className="h2" >10. Changes to These Terms</Grid2>
        <Grid2 className='p-text'>
          We may update these Terms from time to time. Continued use of our services constitutes acceptance of the revised Terms.
        </Grid2>

        <Grid2 className="h2" >11. Contact Us</Grid2>
        <Grid2 className='p-text'>For any questions regarding these Terms of Service, please contact us at:</Grid2>
        <Grid2 className='p-text'><strong>[Insert Contact Email]</strong></Grid2>
        <Grid2 className='p-text'><strong>[Insert Website URL]</strong></Grid2>
      </Grid2>
    </Grid2>
  )
}

export default TermsOfService