import React from 'react'
import {createRoot} from 'react-dom/client'
import Elias, {type EliasBook} from './components/ui/elias-author-hero'
import { ProjectMark, type ProjectSymbol } from './components/ui/project-mark'
import './fonts.css'
import './style.css'
import { useScrollReveal } from './scroll-reveal'

const projects = [
  {title:'EvaluX AI',category:'Academic evaluation',summary:'I’m developing EvaluX AI to help faculty evaluate Activity-Based Learning assignments and manage Continuous Assessment. I designed the interface in Figma and built the login flow and admin dashboard using Next.js and FastAPI. The planned grading workflow retrieves relevant course material, suggests marks and feedback, and gives faculty the final review.',stack:'Retrieval-Augmented Generation · FastAPI · SQLite · Next.js · JWT authentication · Figma'},
  {title:'Edu Tech',category:'Personalised learning',summary:'I built an interactive skill-development and course-learning platform using React and Next.js. I integrated generative AI features to help students follow personalised learning paths as they work through courses.',stack:'React · Next.js · JavaScript · Generative AI'},
  {title:'Selential AI',category:'Complaint management',summary:'I developed a complaint management solution for e-commerce and quick-commerce support teams. I worked on automated ticket routing, priority scoring and escalation workflows to identify complaints that need attention under service-level agreements.',stack:'AI-assisted ticket routing · Priority scoring · SLA escalation · Workflow automation'}
]
const symbols: ProjectSymbol[] = ['assessment', 'learning', 'routing']
const books:EliasBook[] = projects.map((p,i)=>({title:p.title,label:p.title,coverLines:p.title.split(' '),topics:[p.category],symbol:symbols[i],art:(['sunrise','lamp','path'] as const)[i],colors:{cover:['#203847','#24483f','#523c3a'][i],type:'#f7eddc',spine:['#152b37','#17372f','#3d2929'][i]},chapter:'Project notes',chapterTitle:['Grading','Learning','Routing'][i],text:['Faculty review supported by course material.','Learning paths shaped around each student.','Routing and escalation for support teams.'][i]}))
const skills = [
 ['AI & data science','Retrieval-Augmented Generation, Large Language Models, Ollama, data analytics'],['Programming','Python, Java, JavaScript'],['Frontend','React, Next.js, HTML, CSS'],['Backend & platforms','FastAPI, Node.js, Supabase'],['Design','UI/UX Design, Figma, Canva'],['Development & automation','Git, GitHub, n8n']
]
const events = [
 ['Coimbatore Institute of Technology','Web Designing Workshop and 8-Hour Hackathon'],['KPR Institute of Engineering and Technology','No-Code Agentic AI Workshop'],['Kangeyam Institute of Technology','24-Hour Hackathon in 2025 and 2026'],['Kongu Engineering College','Agentic AI Workshop'],['Kodera Info Tech, Hyderabad','24-Hour Hackathon'],['Christ Academy, Bangalore','24-Hour Hackathon']
]
const social=[{label:'GitHub',href:'https://github.com/Mohamedsharuk2110'},{label:'LinkedIn',href:'https://www.linkedin.com/in/mohamed-sharukkhan-87531732b/'}]
function Rows({items}:{items:string[][]}){return <dl>{items.map(([label,value])=><div className="row" key={label}><dt>{label}</dt><dd>{value}</dd></div>)}</dl>}
function Portfolio(){
  useScrollReveal()
  return <>
<Elias brand={{name:'MS.',href:'#top'}} navLinks={{left:[{label:'View My Projects',href:'#projects'},{label:'About',href:'#about'}],right:[{label:'Skills',href:'#skills'},{label:'Education',href:'#education'}]}} navStatus={{label:'Based in',detail:'Tamil Nadu, India'}} navCta={{label:'Contact Me',href:'#contact'}} name={{first:'Mohamed',last:'Sharuk'}} portrait={{src:'/sharukkhan.jpeg',width:1080,height:1080,alt:'Mohamed Sharuk'}} books={books} bookCard={{href:'#project',open:'Open project notes',close:'Close and show next project',folio:'MS'}} motion={{bookCycle:5}} intro={{roles:['Artificial intelligence','Machine learning','Data science'],headline:['I build AI tools','for learning and','academic assessment.'],description:'I’m developing EvaluX AI to help faculty review assignments and give feedback grounded in course material.'}}
letter={{eyebrow:'Notes from my desk',greeting:'Dear tomorrow,',stamp:'Project notes',postmark:'Coimbatore',seal:'MS',sealing:'Sealed for tomorrow',counter:'Note',messages:['I want faculty to see the course material behind every suggested grade.','I’m interested in how machine learning can help prioritise support requests.','I’m exploring how feedback can guide a student’s next step.']}}
socialLinks={[{label:'Download Résumé',href:'/Mohamed-Sharukkhan-Resume.pdf'},...social]}/>
<div className="body">
<section id="projects"><h2>Featured projects</h2>{projects.map((p,i)=><article id={'project-'+p.title.toLowerCase().replace(/ +/g,'-')} key={p.title}><div className={'cover cover'+i} aria-hidden="true"><b>{p.title}</b><ProjectMark symbol={symbols[i]} className="project-emblem"/></div><div><small>{p.category}</small><h3>{p.title}</h3><p>{p.summary}</p><p className="stack">{p.stack}</p></div></article>)}</section>
<section id="about" className="split"><h2>About me</h2><div><p>I’m a third-year B.Tech student in Artificial Intelligence and Data Science at Dhaanish Ahmed Institute of Technology, Coimbatore. My interests are machine learning and data analytics. In EvaluX AI, I’m exploring how retrieval-augmented generation can ground feedback in the material a student actually studied. I use FastAPI, React and Next.js to bring that work into a web application.</p><p>My projects focus on academic assessment, personalised learning, and customer support. I’m interested in entry-level system engineering and full-stack development opportunities.</p></div></section>
<section id="skills" className="split"><h2>Technical skills</h2><Rows items={skills}/></section>
<section id="education" className="split"><h2>Education &amp; certification</h2><Rows items={ [['B.Tech in Artificial Intelligence and Data Science','Dhaanish Ahmed Institute of Technology, Coimbatore · Third year · CGPA 7.6/10 · Expected graduation 2028'],['Higher Secondary Education','St. Mary’s Higher Secondary School, Dindigul'],['NPTEL certification','Privacy and Security in Online Social Media · Score 66%']] }/></section>
<section className="split"><h2>Hackathons &amp; workshops</h2><Rows items={events}/></section></div>
<footer id="contact"><section className="contact-inner"><small>Contact</small><h2>Get in touch.</h2><address><a href="mailto:sharuk0410mohamed@gmail.com">sharuk0410mohamed@gmail.com</a><a href="tel:+918668164545">+91 8668164545</a></address><div>{social.map(s=><a key={s.label} href={s.href}>{s.label}</a>)}<a href="#top">Back to top</a></div></section></footer></>}
createRoot(document.getElementById('root')!).render(<Portfolio/>)
