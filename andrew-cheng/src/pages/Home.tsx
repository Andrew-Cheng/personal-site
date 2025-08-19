import { Github, Twitter, Linkedin, Instagram} from 'lucide-react';

const Home = () => {
  return (
    <div className="space-y-4">
      <h1 className="text-2xl font-bold">hey, i'm andrew cheng</h1>
      
      <p className="text-md">
        i'm a guy that builds stuff to solve problems 
      </p>

      <section>
        <h2 className="text-xl font-bold mb-4">what i'm up to:</h2>
          <ul className="text-sm  pl-5 space-y-2">
            <li>- interning @ scale ai working on SOTA models</li>
            <li>- building authentic</li>
            <li>- launching a matcha truck.... perhaps</li>
          </ul>
      </section>

      <section>
        <h2 className="text-xl font-bold mb-4">previously:</h2>
        <ul className="text-sm pl-5 space-y-2">
          <li>- worked on crowdtest (<a className = "underline"href = "./Projects">crowdtest</a>)</li>
          <li>- best overall hack @ columbia devfest (<a className = "underline"href = "./Projects">social stockfish</a>)</li>
          <li>- stony brook icpc (top 30 GNY, syntax saviors gonna win it all in 2025)</li>
          <li>- high school stuff</li>
            <ul className = "list-disc pl-9 space-y-2">
              <li>salutatorian (2/390), 1570 on a standardized test</li>
              <li>math team, math honor society president (top 5 NCIML, top 20 ARML)</li>
              <li>top 500 trading seashells and fish (imc prosperity 2)</li>
              <li>grandmaster (top 1000 NA) teamfight tactics</li>
              <li>started a weekly coding class at the local library for middle schoolers</li>
            </ul>
        </ul>
      </section>

      <section>
        <h2 className="text-xl font-bold mb-4">thinking about:</h2>
        <ul className="text-sm space-y-1">
          <li>- relationships</li>
          <li>- communication</li>
          <li>- leverage</li>
        </ul>
      </section>

      <section>
        <h2 className="text-xl font-bold mb-4">get in touch:</h2>
        <div className="text-sm flex flex-col gap-2 space-x-4 space-y-2">
          <div>
            i love talking to people from different backgrounds, so reach out!
          </div>
          <div>
          email me at andrew.hua.cheng.2006 [at] gmail [dot] com
          </div>
          <div className='flex flex-row gap-2'>
            <a href="https://github.com/Andrew-Cheng" aria-label="GitHub">
              <Github className="w-6 h-6 " />
            </a>
            <a href="https://x.com/andrewhuacheng" aria-label="Twitter">
              <Twitter className="w-6 h-6 " />
            </a>
            <a href="https://www.linkedin.com/in/andrew-hua-cheng/" aria-label="LinkedIn">
              <Linkedin className="w-6 h-6 " />
            </a>
            <a href="https://www.instagram.com/cheng_andrew_/" aria-label="Instagram">
              <Instagram className="w-6 h-6 " />
            </a>
          </div>
        </div>
      </section>
      
    </div>
  );
};

export default Home;

