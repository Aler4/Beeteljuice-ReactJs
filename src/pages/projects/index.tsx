import {FC} from "react";
import './style.scss';
import {ContactForm,FutureProjects, ProjectsList} from "../../components";

export const Projects: FC = () => {
    return (
        <main className='projects'>
            <section className='projects-header'>
                <div className="container">
                    <h2 className='section__title'>
                        OUR PROJECTS
                    </h2>
                    <p className="projects-description">
                        We have many projects, but if we show them here, then the Internet in the world will work only for this site. <br/>
                        So, this is just a small part of our completed projects...
                    </p>
                </div>
            </section>
            <ProjectsList />
            <FutureProjects />
            <ContactForm/>
        </main>
    )
}
