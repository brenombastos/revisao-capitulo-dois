import { useState, useEffect } from "react";
import { RepositoryItem } from "./RepositoryItem";

import '../styles/repositories.scss';

export function RepositoryList() {
    const [repositories, setRepositories] = useState([]);

    //O use efect dois parametros o primeiro é qual função ele deve executar, 
    //o segundo e quando deve executar
    useEffect(() => {
        fetch('https://api.github.com/orgs/rocketseat/repos')
            .then(response => response.json())
            .then(data => setRepositories(data))
    }, []);//DEPENDENCIAS Sempre que repositories mudar a função dentro de {} é executada, SE [] TIVER VAZIO A FUNÇÃO SÓ EXECUTA 1 VEZ

    console.log(repositories);

    return (
        <section className="repository-list">
            <h1>Lista de repositórios</h1>

            <ul>
                {repositories.map(repository => {
                    return <RepositoryItem key={repository.name} repository={repository} />
                })}
            </ul>
        </section>
    )
}