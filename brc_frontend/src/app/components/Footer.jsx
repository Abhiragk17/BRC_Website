const footerLinks = [
    {
      title: 'Quick Linkes',
      links: [
        'Home',
        'About us',
        'Our Team',
        'Events',
        'Contact us',
      ],
    },
    {
      title: 'Sponsers',
      links: [
        'A',
        'B',
        'C',
      ],
    },
    {
      title: 'Social Media Handles',
      links: [
        'Twitter',
        'Instagram',
        'Discord'
      ],
    },
    ];
  
  import Image from "next/image";
  import Link from "next/link";
  
  const FooterColumn = ({ title, links }) => (
    <div className="footer-column">
      <h4 className="font-semibold">{title}</h4>
      <ul className="flex flex-col gap-2">
        {links.map((link) => (
          <Link href="/" key={link}>
            {link}
          </Link>
        ))}
      </ul>
    </div>
  );
  
  const Footer = () => (
    <footer className="bg-custom-blue text-black py-6">
      <div className="flex flex-col">
        <div className="flex flex-wrap justify-between px-6">
          <FooterColumn title={footerLinks[0].title} links={footerLinks[0].links} />
          <FooterColumn title={footerLinks[1].title} links={footerLinks[1].links} />
          <FooterColumn title={footerLinks[2].title} links={footerLinks[2].links} />
        </div>
      </div>
      <div className="m-auto">
        <p className="m-auto text-black text-sm">
          @ 2023 Blockchain RCOEM. All rights reserved
        </p>
      </div>
    </footer>
  );
  
  export default Footer;
  
  