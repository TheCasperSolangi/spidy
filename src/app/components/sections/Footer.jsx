import Link from "next/link";
import {
  FacebookIcon,
  TwitterIcon,
  InstagramIcon,
  LinkedinIcon,
  GithubIcon
} from "lucide-react";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const links = {
    company: [
      { name: "About Us", href: "/about" },
      { name: "Careers", href: "/careers" }
    ],
    services: [
      { name: "Web Development", href: "/services/web-development" },
      { name: "Mobile Apps", href: "/services/mobile_apps" },
      { name: "Cloud Solutions", href: "#" }, // Coming soon
      { name: "UI/UX Design", href: "#" } // Coming soon
    ],
    support: [
      { name: "Privacy Policy", href: "/privacy_policy" },
      { name: "Terms of Service", href: "/terms-of-service" }
    ]
  };

  const comingSoonServices = ["Cloud Solutions", "UI/UX Design"];

  const socialIcons = [
    {
      icon: <FacebookIcon className="h-5 w-5" />,
      href: "https://www.facebook.com/people/Spidy-Softs/61576823541236/"
    },
    {
      icon: <InstagramIcon className="h-5 w-5" />,
      href: "https://instagram.com/spidysofts"
    }
  ];

  return (
    <footer className="bg-gray-900 text-gray-300 pt-16 pb-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 mb-12">
          <div className="lg:col-span-2">
            <div className="flex items-center gap-2 mb-4">
              <div className="h-8 w-8 rounded-lg gradient-bg"></div>
              <span className="text-xl font-bold text-white">
                Spidy<span className="text-blue-400">Softs</span>
              </span>
            </div>
            <p className="mb-4 max-w-md">
              We create innovative software solutions that empower businesses to
              thrive in the digital era.
            </p>
            <div className="flex gap-4">
              {socialIcons.map((social, index) => (
                <a
                  key={index}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-gray-800 p-2 rounded-full hover:bg-gray-700 transition-colors"
                >
                  {social.icon}
                </a>
              ))}
            </div>
          </div>

          {Object.entries(links).map(([title, items]) => (
            <div key={title} className="space-y-4">
              <h3 className="text-lg font-semibold text-white capitalize">
                {title}
              </h3>
              <ul className="space-y-2">
                {items.map(({ name, href }, index) => {
                  const isComingSoon =
                    title === "services" &&
                    comingSoonServices.includes(name);

                  return (
                    <li key={index}>
                      {isComingSoon ? (
                        <span className="inline-block text-gray-500 cursor-not-allowed transition-colors">
                          {name}
                          <span className="ml-2 text-xs bg-yellow-500 text-black px-2 py-0.5 rounded">
                            Coming Soon
                          </span>
                        </span>
                      ) : href.startsWith("/") ? (
                        <Link
                          href={href}
                          className="inline-block hover:text-white transition-colors"
                        >
                          {name}
                        </Link>
                      ) : (
                        <a
                          href={href}
                          className="inline-block hover:text-white transition-colors"
                        >
                          {name}
                        </a>
                      )}
                    </li>
                  );
                })}
              </ul>
            </div>
          ))}
        </div>

        <div className="border-t border-gray-800 pt-8 text-center text-sm">
          <p>&copy; {currentYear} SpidySofts. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
