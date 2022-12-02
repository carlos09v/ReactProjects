import { DiHtml5, DiCss3, DiJsBadge, DiNodejsSmall, DiMysql, DiReact } from 'react-icons/di'

import '../assets/styles/components/technologiescontainer.sass'

const technologies = [
  { id: "html", name: "HTML5", icon: <DiHtml5 />, about: 'Hypertext Markup Language, (versão 5) é uma linguagem de marcação para a World Wide Web e é uma tecnologia chave da Internet. É a estrutura de uma pagina !' },
  { id: "css", name: "CSS3", icon: <DiCss3 />, about: 'Cascading Style Sheets é um mecanismo para adicionar estilo (cores, fontes, espaçamento, etc.) a um documento web. É a estilização da pagina !' },
  { id: "js", name: "JavaScript", icon: <DiJsBadge />, about: 'Frequentemente abreviado como (JS) é uma linguagem de programação interpretada estruturada, de script em alto nível com tipagem dinâmica fraca e multiparadigma (protótipos, orientado a objeto, imperativo e funcional) !' },
  { id: "node", name: "Node.js", icon: <DiNodejsSmall />, about: 'É um software de código aberto, multiplataforma, baseado no interpretador V8 do Google e que permite a execução de códigos JavaScript fora de um navegador web !' },
  { id: "mysql", name: "MySQL", icon: <DiMysql />, about: 'É um sistema de gerenciamento de banco de dados (SGBD), que utiliza a linguagem SQL (Structured Query Language) como interface !' },
  { id: "react", name: "React", icon: <DiReact />, about: 'É uma biblioteca front-end JavaScript de código aberto com foco em criar interfaces de usuário em páginas web !' }
]

const TechnologiesContainer = () => {
  return (
    <section className='technologies-container'>
      <h2>Tecnologias</h2>
      <div className="technologies-grid">
        {technologies.map(tech => (
          <div className="technology-card" id={tech.id} key={tech.id}>
            {tech.icon}
            <div className="technology-icon">
              <h3>{tech.name}</h3>
              <p>{tech.about}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}

export default TechnologiesContainer