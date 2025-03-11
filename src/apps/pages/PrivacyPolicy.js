import { Grid2 } from '@mui/material'
import React from 'react'
import BackLeftNew from '../assests/BackLeftNew.png'
import BackRight from '../assests/BackRight.png'

function PrivacyPolicy() {
    return (
        <Grid2 className="privacy-container">
            <Grid2 className="privacy-container-inner">
                <Grid2 sx={{ position: 'absolute', top: '0px', left: '0px' }}>
                    <img src={BackLeftNew} />
                </Grid2>
                <Grid2 sx={{ position: 'absolute', right: '0px', top: '80px' }}>
                    <img src={BackRight} />
                </Grid2>
                <h1>Privacy Policy</h1>
                <p className="effective-date"><strong>Effective Date:</strong> March 20, 2025</p>

                <Grid2 className="h2" >1. Introduction</Grid2>
                <Grid2 className='p-text'>
                    Welcome to WhatsApp AI Diet Planner ("we," "our," or "us"). We respect your privacy and are committed to protecting your personal information. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you use our services.
                </Grid2>

                <Grid2 className="h2" >Information We Collect</Grid2>
                <Grid2 className='p-text'>
                    When you use WhatsApp AI Diet Planner, we may collect the following types of information:
                </Grid2>
                <ul>
                    <li><strong>Personal Information:</strong> <span>Name, phone number, email address, and other details you provide.</span></li>
                    <li><strong>Health & Dietary Information:</strong> <span>Food preferences, allergies, dietary goals, and related health details.</span></li>
                    <li><strong>Usage Data:</strong> <span>Interactions with our service, device information, and log data.</span></li>
                </ul>

                <Grid2 className="h2" >How We Use Your Information</Grid2>
                <Grid2 className='p-text'>
                    We use the collected data to:
                </Grid2>
                <ul>
                    <li>Provide personalized diet plans and recommendations.</li>
                    <li>Improve and optimize our AI-driven diet planning services.</li>
                    <li>Communicate with you regarding updates, promotions, and customer support.</li>
                    <li>Ensure compliance with legal obligations and prevent fraud.</li>
                </ul>

                <Grid2 className="h2" >Information Sharing & Disclosure</Grid2>
                <Grid2 className='p-text'>
                    We do not sell or rent your personal data. However, we may share your information in the following cases:
                </Grid2>
                <ul>
                    <li>With service providers who assist in delivering our services.</li>
                    <li>When required by law or to protect rights, safety, or property.</li>
                    <li>In the event of a business transfer such as a merger or acquisition.</li>
                </ul>

                <Grid2 className="h2" >Data Security</Grid2>
                <Grid2 className='p-text'>
                    We implement industry-standard security measures to protect your data from unauthorized access, alteration, or loss.
                    However, no method of transmission over the internet is 100% secure.
                </Grid2>

                <Grid2 className="h2" >6. Your Rights & Choices</Grid2>
                <Grid2 className='p-text'>
                    You have the right to:
                </Grid2>
                <ul>
                    <li>Access, update, or delete your personal data.</li>
                    <li>Opt-out of marketing communications.</li>
                    <li>Restrict certain data processing activities.</li>
                </ul>
                <Grid2 className='p-text'>To exercise your rights, contact us at <strong>[Insert Contact Email]</strong>.</Grid2>

                <Grid2 className="h2" >7. Third-Party Links & Services</Grid2>
                <Grid2 className='p-text'>
                    Our service may contain links to third-party websites. We are not responsible for their privacy practices,
                    and we encourage you to review their policies.
                </Grid2>

                <Grid2 className="h2" >8. Changes to This Privacy Policy</Grid2>
                <Grid2 className='p-text'>
                    We may update this Privacy Policy from time to time. Changes will be posted on this page with an updated effective date.
                </Grid2>

                <Grid2 className="h2" >9. Contact Us</Grid2>
                <Grid2 className='p-text'>For any questions regarding this Privacy Policy, please contact us at:</Grid2>
                <Grid2 className='p-text'><strong>[Insert Contact Email]</strong></Grid2>
                <Grid2 className='p-text'><strong>[Insert Website URL]</strong></Grid2>
            </Grid2>
        </Grid2>

    )
}

export default PrivacyPolicy