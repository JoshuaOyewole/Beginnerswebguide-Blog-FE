import styles from '../styles/Footer.module.css'

function Footer() {
    let cYear = new Date().getFullYear();
    return (
		<footer className={styles.footer}>
			<div className={styles.subFooter}>
				<div className="flex j-c-sb">
					<div className="box">
						<h4 className="subFooterHeader">Social Links</h4>
							<ul>
								<li>Facebook</li>
								<li>Twitter</li>
								<li>YouTube</li>
								<li>PinInterest</li>
							</ul>
					</div>	
					<div className="box">
						<h4 className="subFooterHeader">Social Links</h4>
							<ul>
								<li>Facebook</li>
								<li>Twitter</li>
								<li>YouTube</li>
								<li>PinInterest</li>
							</ul>
					</div>
					<div className="box">
						<h4 className="subFooterHeader">Social Links</h4>
							<ul>
								<li>Facebook</li>
								<li>Twitter</li>
								<li>YouTube</li>
								<li>PinInterest</li>
							</ul>
					</div>
					<div className="box">
						<h4 className="subFooterHeader">Social Links</h4>
							<ul>
								<li>Facebook</li>
								<li>Twitter</li>
								<li>YouTube</li>
								<li>PinInterest</li>
							</ul>
					</div>
				</div>
			</div>
			<p className='pt-s pb-s footer t-center uppercase	'>
                 Copyright &copy; 
                 <span id='copyrightYear'> {cYear}</span>. 
                 YouthfulBusiness. All Rights Reserved
            </p>
		</footer>
			
    )
}

export default Footer