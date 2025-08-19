interface Credit {
  name: string;
  url: string;
}

interface ProjectCardProps {
  title: string;
  description: string;
  features: string[];
  credits: Credit[];
  videoSrc?: string;
}

const ProjectCard = ({ title, description, features, credits, videoSrc }: ProjectCardProps) => {
  return (
    <div className="bg-white border border-gray-200 rounded-lg p-6 shadow-sm">
      <div className="space-y-6">
        {/* Content */}
        <div className="space-y-4">
          <div>
            <h2 className="text-xl font-bold mb-2">{title}</h2>
            <p className="text-gray-700 text-sm">{description}</p>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-2">Features:</h3>
            <ul className="space-y-2">
              {features.map((feature, index) => (
                <li key={index} className="text-sm text-gray-600">
                  • {feature}
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-2">Credits:</h3>
            <div className="flex flex-wrap gap-2">
              {credits.map((credit, index) => (
                <a
                  key={index}
                  href={credit.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm text-gray-600 underline"
                >
                  {credit.name}
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Video - only render if videoSrc is provided */}
        {videoSrc && (
          <div className="flex justify-center">
            <video
              src={videoSrc}
              controls
              className="w-full max-w-2xl h-auto rounded-lg shadow-sm"
              preload="metadata"
            >
              Your browser does not support the video tag.
            </video>
          </div>
        )}
      </div>
    </div>
  );
};

export default ProjectCard;
