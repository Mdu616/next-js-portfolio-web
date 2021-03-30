import Link from 'next/link';
import Navbar from '../components/Navbar';
import Head from 'next/head'

function About() {
	return (
		<>
			<Head>
			  <title>About</title>
			</Head>

			<Navbar />

			<section className="hero">
			  <div className="container">
			    <div className="text-wrapper w-full">
			      <h1 className="title">About</h1>
			      <p className="description">
			      	 A focused, self-motivated talented multiskilled developer who has willingness to learn and always strives to contribute. CEO of Isanode Group.
			      </p>
		      </div>
	      </div>
			</section>
		</>
	);
}

export default About;
