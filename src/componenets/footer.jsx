import adImg from '../assets/CW.jpg';
import data from '../data/data.json';
import { GoogleAd } from './utils';

const CustomAd = () => (
    <div className="text-center text-md-end wpes-custom-ad">
        <figure className="figure text-center mb-1">
            <a rel='nofollow' href="https://wordpress.org/plugins/classic-widgets-with-block-based-widgets/">
                <img width="600" height="216" className="img-fluid rounded" alt="Classic Widgets with Block-based Widgets" src={adImg} />
            </a>
            <figcaption className="figure-caption pt-1">
                <a rel='nofollow' href="https://wordpress.org/plugins/classic-widgets-with-block-based-widgets/">
                    Use both widgets screens at the same time with <em>Classic Widgets with Block-based Widgets</em> plugin.
                </a>
            </figcaption>
        </figure>
    </div>
);

const footerLinks = data.footerLinks.map(({ title, href, rel }) =>
    <a key={title} className="nav-link" rel={rel} href={href}>{title}</a>
);

const Footer = () => (
    <footer className="bg-light mt-4 py-2 overflow-hidden text-dark">
        <div className="container-fluid">
            <div className="row">
                <div className="col-12 col-md-6">
                    <GoogleAd slot='3305888916' />
                </div>
                <div className="col-12 col-md-6 align-self-end">
                    <CustomAd />
                    <nav className="nav justify-content-md-end justify-content-center">
                        {footerLinks}
                    </nav>
                </div>
            </div>
        </div>
    </footer>
);

export default Footer;