import { FaLinkedin, FaGithub, FaInstagram} from 'react-icons/fa'

import '../assets/styles/components/socialnetworks.sass'

const socialNetworks = [
    { name: 'linkedin', icon: <FaLinkedin />, href: 'https://www.linkedin.com/in/carlos09v/'},
    { name: 'github', icon: <FaGithub />, href: 'https://github.com/carlos09v'},
    { name: 'instagram', icon: <FaInstagram />, href: 'https://www.instagram.com/carlos09v/'}
]

const SocialNetworks = () => {
  return (
    <section id='social-networks'>
        {socialNetworks.map(network => (
            <a href={network.href} className='social-btn' id={network.name} key={network.name}>
                {network.icon}
            </a>
        ))}
    </section>
  )
}

export default SocialNetworks