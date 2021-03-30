import Link from 'next/link';
import Navbar from '../components/Navbar';
import Head from 'next/head'

function Contact() {
	return (
		<>
			<Head>
			  <title>Contact</title>
			</Head>

			<Navbar />

			<section className="hero">
			  <div className="container">
			    <div className="text-wrapper w-full">
			      <h1 className="title">Contact</h1>
			      <p className="description">
			      	Contact me and let's work together.
			      </p>
			      <ul className="contact-links">
			      	<li className="contact-item">Email: mduduzi@isanode.com</li>
			      	<li className="contact-item">Phone: +27 71 799 6756</li>
			      </ul>
		      </div>
	      </div>
			</section>
		</>
	);
}

export default Contact;
