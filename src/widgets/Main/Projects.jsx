import { useEffect, useState } from 'react';
import axios from 'axios';
import plashka from "../../assets/icons/plashka.png"
import "./Main.css"

const Projects = () => {
    const [repos, setRepos] = useState([]);

    useEffect(() => {
        axios.get('https://api.github.com/users/blyxzgg/repos')
            .then(response => {
                const firstThree = response.data.slice(0, 3);
                setRepos(firstThree);
            })
            .catch(error => {
                console.error('Ошибка:', error);
            });
    }, []);

    return (
        <section className="projects container" id='projects'>
            <div className="projects__content">
                <div className="projects__title">
                    <h2><span>#</span>projects</h2>
                    <button>View all →</button>
                </div>
                <div className='projects__cards'>
                    {repos.map(repo => (
                        <div key={repo.id} className='card'>
                            <img src={plashka} alt="ava" />
                            <div className="card__details">
                                <p className='underline'>{repo.language || 'README'}</p>
                                <h3>{repo.name}</h3>
                                <p>{repo.description || 'Нет описания'}</p>
                                <a href={repo.html_url} target="_blank">
                                     To GitHub
                                </a>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Projects;
