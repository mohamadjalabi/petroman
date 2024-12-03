import React, { useState } from 'react';
import emailjs, { EmailJSResponseStatus } from 'emailjs-com';

function DistributorsPage() {
    // const distributors = [
    //     { name: 'Distributor 1', location: 'Location 1' },
    //     { name: 'Distributor 2', location: 'Location 2' },
    //     { name: 'Distributor 3', location: 'Location 3' }
    //     // Add more distributors as needed
    // ];

    const [formData, setFormData] = useState({
        name: '',
        phone: '',
        companyName: '',
        location: '',
        email: '',
        message: ''
    });

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>): void => {
        e.preventDefault();
        sendEmail(formData);
    };

    interface FormData {
        name: string;
        phone: string;
        companyName: string;
        location: string;
        email: string;
        message: string;
    }

    const sendEmail = (formData: FormData): void => {
        const { name, phone, companyName, location, email, message } = formData;

        emailjs.send(
            'service_3dj6dka',     // EmailJS Service ID
            'template_p375odj',    // EmailJS Template ID
            {
                user_name: name,
                user_email: email,
                user_phone: phone,
                company_name: companyName,
                location: location,
                message: message
            },
            'GAhCQppo8IT6Mqaej'
        )
        .then((response: EmailJSResponseStatus) => {
            console.log('SUCCESS!', response.status, response.text);
            alert('Your request has been sent successfully.');
            setFormData({ name: '', email: '', phone: '', companyName: '', location: '', message: '' });
        })
        .catch((err: Error) => {
            console.error('FAILED...', err);
            alert('There was an error sending your request.');
        });
    };
    return (
        <>
        <div className="distributors-page" id='distributer'>
            {/* Become a Distributor Section */}
            <section className="become-distributor-section">
                <h2>Become a Distributor</h2>
                <form className='dform' onSubmit={handleSubmit}>
                    <div>
                        <label>Name:</label>
                        <input
                            type="text"
                            name="name"
                            value={formData.name}
                            onChange={handleChange}
                            required
                        />
                    </div>
                    <div>
                        <label>Email:</label>
                        <input
                            type="email"
                            name="email"
                            value={formData.email}
                            onChange={handleChange}
                            required
                        />
                    </div>
                    <div>
                        <label>Phone:</label>
                        <input
                            type="tel"
                            name="phone"
                            value={formData.phone}
                            onChange={handleChange}
                            required
                        />
                    </div>
                    <div>
                        <label>Company Name:</label>
                        <input
                            type="text"
                            name="companyName"
                            value={formData.companyName}
                            onChange={handleChange}
                            required
                        />
                    </div>
                    <div>
                        <label>Location:</label>
                        <input
                            type="text"
                            name="location"
                            value={formData.location}
                            onChange={handleChange}
                            required
                        />
                    </div>
                    <div>
                        <label>Message:</label>
                        <textarea
                            name="message"
                            value={formData.message}
                            onChange={handleChange}
                            required
                        />
                    </div>
                    <button className='forum-button' type="submit">Send Request</button>
                </form>
            </section>
        </div>

        </>
    );
}

export default DistributorsPage;
