import { FaEnvelope, FaPhone, FaLinkedin } from "react-icons/fa";

const Contact = () => (
     <div className="w-full mt-20 flex flex-col items-center justify-center">
          <h2 className="text-center bold text-4xl">CONTACT ME</h2>
          <ul className="contact-list w-fit p-15 border border-gray-300 rounded-lg shadow-md gap-y-5 flex flex-col mt-3 text-xl">
               <li>
                    <FaEnvelope className="inline mr-2" color="red"/>
                    <strong>Email:</strong> <a href="mailto:renilson.c.luna@gmail.com" target="_blank" className="hover:text-red-400">renilson.c.luna@gmail.com</a>
               </li>
               <li>
                    <FaPhone className="inline mr-2" />
                    <strong>Tel:</strong> +55 19 99719-3032
               </li>
               <li>
                    <FaLinkedin className="inline mr-2" color="blue"/>
                    <strong>LinkedIn:</strong> <a href="https://www.linkedin.com/in/renilson-luna" target="_blank" rel="noopener noreferrer" className="text-blue-800 hover:text-blue-500"> linkedin.com/in/renilson-luna</a>
               </li>
          </ul>
     </div>
);

export default Contact;