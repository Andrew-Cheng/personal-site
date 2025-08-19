import ProjectCard from '../components/ProjectCard';

const Projects = () => {
  return (
    <div className="max-w-6xl mx-auto px-4 py-16">
      <h1 className="text-2xl font-bold mb-8">projects</h1>
      <div className="grid gap-8">
      <ProjectCard
          title="authentic"
          description="coming soon™"
          features={[
          ]}
          credits={[
            { name: "seshu mallina", url: "https://www.linkedin.com/in/seshu-mallina-150844195/" },
            { name: "neil sharma", url: "https://www.linkedin.com/in/neil-sharma-88451b1b6/" },
            { name: "vipashyana patel", url: "https://www.weekday.works/people/vipashyana-patel-vipashyana" },
          ]}
        />
      <ProjectCard
          title="crowdtest"
          description="AB test viral tweets with social simulation"
          features={[
            "prediction tool to help creators know how their audience will respond to tweets before they post",
            "genetic algorithm refines tweets based off of the user’s tone, diction, and style in past tweets",
            "openai agents sdk simulates hundreds of user reactions in parallel, reducing runtime to ~1 minute from 10 minutes",
          ]}
          credits={[
            { name: "madhav rapelli", url: "https://www.madhavrapelli.com/" },
            { name: "eddy xu", url: "https://www.eddy.build/" },
            { name: "jonathan jia", url: "https://www.linkedin.com/in/jonathanjia/" },
            { name: "andrew li", url: "https://andrewli.info/" }
          ]}
          videoSrc="/crowdtest.mp4"
        />
        <ProjectCard
          title="social stockfish"
          description="real-time consequence reasoning engine for conversations"
          features={[
            "tri-agent system to predict the best responses to the most likely replies and evaluate conversation in the context of a goal",
            "parallel processing enables the simulation hundreds of conversations through 6 layers of conversation depth using Llama 3.3 70B, in ~10 seconds",
            "monte carlo simulation uses probability-weighted simulations to optimize responses",
            "imessage integration in a live chat editor, showing branching conversation trees with analysis in real-time",
            "best overall hack @ columbia devfest"
          ]}
          credits={[
            { name: "madhav rapelli", url: "https://www.madhavrapelli.com/" },
            { name: "eddy xu", url: "https://www.eddy.build/" },
            { name: "caden li", url: "https://cadenli.com/" }
          ]}
          videoSrc="/social-stockfish-demo.mp4"
        />
        <ProjectCard
          title="arrr-gumentor"
          description="debate engine that knows exactly what your opponent is going to say before they say it"
          features={[
            "turned the real-time consequence reasoning engine into the best debate prep tool",
            "view debate trees in a interactive graph to study the best counters to hundreds of claims",
            "practice debating against the reasoning engine in a voice agent, and see how it would respond to your arguments",
            "runner up for best ui/ux @ the piratey hopperhacks X"
          ]}
          credits={[
            { name: "madhav rapelli", url: "https://www.madhavrapelli.com/" },
            { name: "tanjeed alam", url: "https://www.eddy.build/" },
            { name: "samuel buena", url: "https://www.linkedin.com/in/jonathanjia/" },

          ]}
        />
      </div>
    </div>
  );
};
  
export default Projects;