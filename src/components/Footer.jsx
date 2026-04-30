import Link from "next/link";
import { CiMail } from "react-icons/ci";

import { FaFacebookF, FaGithub, FaLinkedin, FaMapMarkerAlt, FaPhoneAlt } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="border-t border-white/10 bg-black text-white ">
      <div className="mx-auto grid max-w-7xl gap-10 px-5 py-12 md:grid-cols-4">
        
        {/* Brand */}
        <div>
          <h2 className="text-2xl font-bold">
            Skill<span className="text-blue-400">Sphere</span>
          </h2>
          <p className="mt-3 text-sm leading-6 text-gray-400">
            Learn new skills, explore courses, and grow your career with confidence.
          </p>
        </div>

        {/* Contact Info */}
        <div>
          <h3 className="mb-4 text-lg font-semibold">Contact Info</h3>

          <div className="space-y-3 text-sm text-gray-400">
            <p className="flex items-center gap-3">
              <CiMail size={16} /> support@skillsphere.com
            </p>
            <p className="flex items-center gap-3">
              <FaPhoneAlt size={16} /> +880 xxxx-xxxxxx
            </p>
            <p className="flex items-center gap-3">
              <FaMapMarkerAlt size={16} /> Dhaka, Bangladesh
            </p>
          </div>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="mb-4 text-lg font-semibold">Quick Links</h3>

          <div className="flex flex-col gap-3 text-sm text-gray-400">
            <Link href="/" className="hover:text-blue-400">
              Home
            </Link>
            <Link href="/courses" className="hover:text-blue-400">
              Courses
            </Link>
            <Link href="/profile" className="hover:text-blue-400">
              My Profile
            </Link>
            <Link href="/terms" className="hover:text-blue-400">
              Terms & Conditions
            </Link>
            <Link href="/privacy" className="hover:text-blue-400">
              Privacy Policy
            </Link>
          </div>
        </div>

        {/* Social Links */}
        <div>
          <h3 className="mb-4 text-lg font-semibold">Follow Us</h3>

          <div className="flex gap-3">
  <Link
    href="#"
    className="rounded-full border border-white/10 p-3 text-gray-300 hover:bg-blue-500 hover:text-white"
  >
    <FaFacebookF size={18} />
  </Link>

  <Link
    href="#"
    className="rounded-full border border-white/10 p-3 text-gray-300 hover:bg-blue-500 hover:text-white"
  >
    <FaGithub size={18} />
  </Link>

  <Link
    href="#"
    className="rounded-full border border-white/10 p-3 text-gray-300 hover:bg-blue-500 hover:text-white"
  >
    <FaLinkedin size={18} />
  </Link>
</div>
        </div>
      </div>

      {/* Bottom */}
      <div className="border-t border-white/10 px-5 py-5 text-center text-sm text-gray-500">
        © {new Date().getFullYear()} SkillSphere. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;