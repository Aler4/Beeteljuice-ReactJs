import {FC, useEffect, useState} from 'react';
import store from "../../store/rewards";
import {ProjectCard} from "../projectCard";
import './style.scss';

export const ProjectsList:FC = () => {
    const [projects, setProjects] = useState(store.data.projects);
    useEffect(() => {
        if (store.data.projects.length === 0){
            store.fetchData();
        }
    },[store]);

    return (
        <section className='projects-list__wrapp'>
            <div className="container">
                <h2 className='section__title'>Examples of projects</h2>
                <div className="project-list">
                    {projects.map((el,i) => (
                        <ProjectCard key={i} photo={el.photo} title={el.title} description={el.description} read={el.read} />
                    ))}
                </div>
            </div>
        </section>
    )
}