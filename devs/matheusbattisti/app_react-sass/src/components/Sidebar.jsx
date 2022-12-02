import SocialNetworks from './SocialNetworks'
import InformationContainer from './InformationContainer'

import '../assets/styles/components/sidebar.sass'

const Sidebar = ({ imgHref, imgAlt }) => {
  return (
    <aside id="sidebar">
        <img src={imgHref} alt={imgAlt} />
        <p className="title">Desenvolvedor</p>
        <SocialNetworks />
        <InformationContainer />
        <a href="#" className="btn">Download PDF</a>
    </aside>
  )
}

export default Sidebar