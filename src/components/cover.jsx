import "./cover.css";

export const Cover = () => {
	return (
		<div className='cover'>
			<Navbar />
			<Banner />
		</div>
	);
};

const Navbar = () => {
	return (
		<nav className='custom-nav m-0 p-0 navbar navbar-expand-lg navbar-dark'>
			<a className='navbar-brand' href='#'>
				Hotel Brij
			</a>
			<button
				className='navbar-toggler'
				type='button'
				data-toggle='collapse'
				data-target='#navbarSupportedContent'
				aria-controls='navbarSupportedContent'
				aria-expanded='false'
				aria-label='Toggle navigation'
			>
				<span className='navbar-toggler-icon'></span>
			</button>

			<div
				className='collapse navbar-collapse'
				id='navbarSupportedContent'
			>
				<ul className='navbar-nav mr-auto'>
					<li className='nav-item active'>
						<a className='nav-link' href='#'>
							Home <span class='sr-only'></span>
						</a>
					</li>
					<li className='nav-item'>
						<a className='nav-link' href='#'>
							About
						</a>
					</li>
					<li className='nav-item'>
						<a className='nav-link' href='#'>
							Facilities
						</a>
					</li>
					<li className='nav-item'>
						<a className='nav-link' href='#'>
							Contact Us
						</a>
					</li>
				</ul>
			</div>
		</nav>
	);
};

const Banner = () => {
	return (
		<div className='m-0 p-0 banner row text-capitalize align-items-center justify-content-center'>
			<h1 className='motto col-12 col-lg-6 text-light text-center'>
				The best place to stay in Bharatpur
			</h1>
			<button
				type='button'
				className='btn btn-outline-dark col-12 col-lg-6 text-center'
			>
				Book Now
			</button>
		</div>
	);
};
