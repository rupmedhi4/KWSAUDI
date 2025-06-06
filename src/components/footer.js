import React from 'react';
import {
  FaSearch, FaBars, FaTimes, FaBuilding,
  FaNetworkWired, FaUserTie, FaKey, FaUser,
  FaUsers, FaGlobe, FaHome, FaEnvelope, FaPhone,
  FaFacebookF, FaInstagram, FaLinkedinIn, FaYoutube,
  FaTwitter, FaTiktok, FaSnapchatGhost, FaWhatsapp, FaChevronDown
} from "react-icons/fa";

const Footer = () => {
  return (
    <div>
      {/* Footer Grid */}
      <div className="mt-4 px-4 md:px-5">
        {/* Top Contact Info */}
        <div className="flex flex-col md:flex-row md:justify-between border border-gray-100 rounded-xl items-start border-b p-4 md:p-8 pb-2 md:pb-4 text-sm md:text-base bg-gray-100 text-gray-700">
          <div className="flex items-center space-x-2 font-semibold">
            <span className="text-red-800 text-xl md:text-xl">CONTACT US</span>
          </div>
          <div className="flex items-start space-x-1 text-[0.85rem]">
            <span>EMAIL</span>
            <span>-</span>
            <span>INFO@KWSAUDIARABIA.COM</span>
          </div>
          <div className="flex items-center space-x-1 text-[0.85rem]">
            <span>TELEPHONE</span>
            <span>-</span>
            <span>9200-15671</span>
          </div>
          <div className="flex space-x-2 md:space-x-3 text-gray-700 text-base md:text-xl">
            <a href="https://www.linkedin.com/company/kwsaudiarabia/" aria-label="LinkedIn" className="w-7 h-7 rounded-full bg-black flex items-center justify-center text-white hover:bg-gray-800 transition-colors">
              <FaLinkedinIn size={14} />
            </a>
            <a href="#" aria-label="YouTube" className="w-7 h-7 rounded-full bg-black flex items-center justify-center text-white hover:bg-gray-800 transition-colors">
              <FaYoutube size={14} />
            </a>
            <a href="#" aria-label="Twitter" className="w-7 h-7 rounded-full bg-black flex items-center justify-center text-white hover:bg-gray-800 transition-colors">
              <FaTwitter size={14} />
            </a>
            <a href="#" aria-label="Snapchat" className="w-7 h-7 rounded-full bg-black flex items-center justify-center text-white hover:bg-gray-800 transition-colors">
              <FaSnapchatGhost size={14} />
            </a>
            <a href="#" aria-label="Instagram" className="w-7 h-7 rounded-full bg-black flex items-center justify-center text-white hover:bg-gray-800 transition-colors">
              <FaInstagram size={14} />
            </a>
            <a href="#" aria-label="Facebook" className="w-7 h-7 rounded-full bg-black flex items-center justify-center text-white hover:bg-gray-800 transition-colors">
              <FaFacebookF size={14} />
            </a>
            <a href="#" aria-label="TikTok" className="w-7 h-7 rounded-full bg-black flex items-center justify-center text-white hover:bg-gray-800 transition-colors">
              <FaTiktok size={14} />
            </a>
          </div>
        </div>

        {/* Grid Columns */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-8 gap-6 md:gap-4 w-full">
          {[
            {
              label: "Properties",
              imageUrl: "https://static.wixstatic.com/media/36a881_58e60526563049da91b5a702cb9995ac~mv2.png/v1/fill/w_230,h_189,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/1.png",
              path: "/properties",
              items: ["Active", "Sold", "Rent", "Auction", "New Development", "International"]
            },
            {
              label: "Market Center",
              imageUrl: "https://static.wixstatic.com/media/36a881_63ae150a87e247f4910718ae270a72c0~mv2.png/v1/fill/w_230,h_189,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/2.png",
              path: "/marketCenter",
              items: ["Jasmine", "Jeddah", "All"]
            },
            {
              label: "Agent",
              imageUrl: "https://static.wixstatic.com/media/36a881_e044755275e349d683e96f438b0bb5c2~mv2.png/v1/fill/w_230,h_189,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/3.png",
              path: "/agent",
              items: ["Name", "Market Center", <span className="text-red-600 font-semibold">LOGIN</span>]
            },
            {
              label: "Seller",
              imageUrl: "https://static.wixstatic.com/media/36a881_19eaa839fd874fc8981955a4021a4ca8~mv2.png/v1/fill/w_230,h_189,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/4.png",
              path: "/seller",
              items: ["Book Agent Evaluation", "Seller Guide", "Five Steps To Sell"]
            },
            {
              label: "Buyer",
              imageUrl: "https://static.wixstatic.com/media/36a881_e46ac8d781f74cc4b8398f64c2d63425~mv2.png/v1/fill/w_230,h_189,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/5.png",
              path: "/buyer",
              items: ["Search Property", "Property Auction", "New Development", "Buyer Guide"]
            },
            {
              label: "Tenant",
              imageUrl: "https://static.wixstatic.com/media/36a881_464aa2c8eefd4c3aab2ff966735952a8~mv2.png/v1/fill/w_230,h_189,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/6.png",
              path: "/tenant",
              items: ["Rent Search", "Tenant Guide"]
            },
            {
              label: "Franchise",
              imageUrl: "https://static.wixstatic.com/media/36a881_93371d3a91d7440b895906dd5eb1620a~mv2.png/v1/fill/w_230,h_189,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/7.png",
              path: "/franchise",
              items: ["Overview", "Benefits", "Application"]
            },
            {
              label: "Our Culture",
              imageUrl: "https://static.wixstatic.com/media/36a881_795b387ef3734f7b97a97edd833d71b7~mv2.png/v1/fill/w_230,h_189,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/8.png",
              path: "/ourCulture",
              items: ["About Us", "Why KW", "KW Training", "KW Technology", "KW University", "Events", "News", "Contact Us"]
            },
          ].map(({ label, imageUrl, path, items }, i) => (
            <div key={i}>
              <div className="rounded-xl flex flex-col transition-all cursor-pointer mb-2">
                <a href={path}>
                  <img
                    src={imageUrl}
                    alt={label}
                    className="h-full w-full object-contain mb-2 mt-4"
                  />
                </a>
              </div>
              <div className="md:border-l md:border-gray-300 md:pl-4 pl-4 ml-2">
                <ul className="text-md space-y-6 text-left">
                  {items.map((item, index) => (
                    <li key={index} className="hover:text-gray-600 transition-colors">
                      {typeof item === 'string' ? (
                        <a href={path} className="block w-full">{item}</a>
                      ) : (
                        <a href={path} className="block w-full">{item}</a>
                      )}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
      {/* Bottom Footer Info */}
      <div className="bg-gray-100 text-gray-50 mt-20 text-sm px-6 border-t">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-start md:items-center gap-6">
          <div className物品中心 className="flex items-center gap-3">
            <img
              src="footerlogo.jpg"
              alt="KW Saudi Arabia Logo"
              className="h-46 w-auto object-contain"
            />
          </div>
          <div className="text-right space-y-1 text-base">
            <a href="#" className="text-gray-500 text-[0.85rem]">شركة الياسمين لإدارة وتطوير العقارات</a>
            <p className="text-gray-500 text-[0.85rem]">REGA LICENSE NUMBER #1200018764</p>
            <p className="text-gray-500 text-[0.85rem]">KW Saudi Arabia HQ - 2740 King Fahad Branch Rd, Al Sahafah, 6403, Riyadh 13515</p>
            <div className="flex flex-wrap justify-end gap-4 text-gray-600 mt-1 text-[0.85rem]">
              <a href="#" className="hover:underline">© 2026 All Rights Reserved</a>
              <a href="#" className="hover:underline">KW Saudi Arabia</a>
              <a href="#" className="hover:underline">Privacy Policy</a>
              <a href="#" className="hover:underline">Terms Of Use</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;