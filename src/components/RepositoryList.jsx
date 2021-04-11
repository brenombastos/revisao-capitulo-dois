import { RepositoryItem } from "./RepositoryItem";

const repositoryObject = {
    name: 'unform',
    description: 'Forms in React',
    link: 'https://github.com/unform/unform'
}

export function RepositoryList() {
    return (
        <section className="repository-list">
            <h1>Lista de repositórios</h1>

            <ul>

                <RepositoryItem repository={repositoryObject} />
                <RepositoryItem repository={repositoryObject} />
                <RepositoryItem repository={repositoryObject} />


            </ul>
        </section>
    )
}