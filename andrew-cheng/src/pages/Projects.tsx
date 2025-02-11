const Projects = () => {
  return (
    <div className="max-w-2xl mx-auto px-4 py-16">
      <h1 className="text-4xl font-bold mb-8">projects</h1>
      <div className="grid gap-8">
        <div className="border rounded-lg p-6">
          <h2 className="text-2xl font-semibold mb-2">social stockfish</h2>
          <p className="text-gray-700 mb-4">
          real-time consequence reasoning engine for conversations 
          </p>
          <ul className="space-y-4 ml-6 text-gray-700">
            <li>- tri-agent system to predict the best responses to the most likely replies and evaluate conversation in the context of a goal</li>
            <li>- parallel processing enables the simulation hundreds of conversations through 6 layers of conversation depth using Llama 3.3 70B, in ~10 seconds</li>
            <li>- monte carlo simulation uses probability-weighted simulations to optimize responses</li>
            <li>- imessage integration in a live chat editor, showing branching conversation trees with analysis in real-time</li>
          </ul>
          <p className="text-gray-700 mt-4">
            more updates coming soon™
          </p>
          <p className="text-gray-700 mt-4">
            built with madhav rapelli, eddy xu, and caden li.
          </p>
         {/* Add links if applicable */}
          {/* <a href="#" className="text-blue-500 hover:underline">GitHub</a> */}
        </div>

        {/*  Add other projects here in the same format */}
        {/* <div className="border rounded-lg p-6">
          <h2 className="text-2xl font-semibold mb-2">Project Title</h2>
           <p>...</p>
        </div> */}

      </div>
    </div>
  );
};
  
  export default Projects;