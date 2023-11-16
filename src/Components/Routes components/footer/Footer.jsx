import logo from "../../../../public/img/logo.png"
const Footer = () => {
  return (
    <div className="footerBg py-7 font-semibold">
      <footer className="footer lg:w-[1400px] mx-auto p-10  text-base-content">
        <aside>
          <img src={logo} className="bg-gray-200 object-contain rounded-sm" alt="" />
          <p>
            Gable job portal
            <br />
            Address: 123 Innovation Avenue, Tech City, CA 98765, USA.
          </p>
        </aside>
        <nav>
          <header className="footer-title">Services</header>
          <a className="link link-hover">Branding</a>
          <a className="link link-hover">Design</a>
          <a className="link link-hover">Marketing</a>
          <a className="link link-hover">Advertisement</a>
        </nav>
        <nav>
          <header className="footer-title">Company</header>
          <a className="link link-hover">About us</a>
          <a className="link link-hover">Contact</a>
          <a className="link link-hover">Jobs</a>
          <a className="link link-hover">Press kit</a>
        </nav>
        <nav>
          <header className="footer-title">Legal</header>
          <a className="link link-hover">Terms of use</a>
          <a className="link link-hover">Privacy policy</a>
          <a className="link link-hover">Cookie policy</a>
        </nav>
      </footer>
    </div>
  );
};

export default Footer;
