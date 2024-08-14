import { FiFacebook, FiYoutube } from 'react-icons/fi';
import { SlSocialVkontakte } from 'react-icons/sl';
import { FaInstagram } from 'react-icons/fa';

const SocialMediaLinks = () => {
  return (
    <div className="flex gap-6 text-white">
      <a className="md:hover:text-golden md:transition duration-200" aria-label='Youtube' href='#'>
        <FiYoutube size={35} />
      </a>
      <a className="md:hover:text-golden md:transition duration-200" aria-label='Vkontakte' href='#'>
        <SlSocialVkontakte size={35} />
      </a>
      <a className="md:hover:text-golden md:transition duration-200" aria-label='Facebook' href='#'>
        <FiFacebook size={30} />
      </a>
      <a className="md:hover:text-golden md:transition duration-200" aria-label='Instagram' href='#'>
        <FaInstagram size={32} />
      </a>
    </div>
  );
};

export default SocialMediaLinks;
