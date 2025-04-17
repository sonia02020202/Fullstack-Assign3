// components/ProjectCard.jsx
export default function ProjectCard({ project }) {
    return (
      <div className="border rounded-lg shadow-md p-4">
        <img src={project.image} alt={project.name} className="w-full h-48 object-cover mb-2" />
        <h3 className="text-xl font-semibold">{project.name}</h3>
        <p>{project.description}</p>
        <p className="text-sm text-gray-600">Languages: {project.languages.join(', ')}</p>
        {project.url && <a href={project.url} target="_blank" className="text-blue-500">View Project</a>}
      </div>
    );
  }
  