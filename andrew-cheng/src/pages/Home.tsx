import { Github, Twitter, Linkedin, Mail } from 'lucide-react';

const Home = () => {
  return (
    <div className="space-y-12">
        <div>
      <h1 className="text-red-500 text-4xl mb-4">hey, i'm andrew</h1>
      <p className="bg-blue-200 p-4 rounded">
        If you see this text in red and this paragraph with a blue background and padding, Tailwind is working!
      </p>
        </div>
      <h1 className="text-4xl font-bold">hey, i'm andrew</h1>
      
      <p className="text-xl">
        i build things for people. my singular goal is to have a net-positive impact on the world.
      </p>

      <section>
        <h2 className="text-2xl font-bold mb-4">what i'm up to:</h2>
        <p>[Your current status/activity]</p>
      </section>

      <section>
        <h2 className="text-2xl font-bold mb-4">previously:</h2>
        <ul className="space-y-2">
          <li>- [Achievement 1]</li>
          <li>- [Achievement 2]</li>
          <li>- [Achievement 3]</li>
        </ul>
      </section>

      <section>
        <h2 className="text-2xl font-bold mb-4">thinking about:</h2>
        <ul className="space-y-1">
          <li>[Topic 1]</li>
          <li>[Topic 2]</li>
          <li>[Topic 3]</li>
        </ul>
      </section>

      <section>
        <h2 className="text-2xl font-bold mb-4">get in touch:</h2>
        <div className="flex space-x-4">
          <a href="https://github.com/[your-username]" aria-label="GitHub">
            <Github className="w-6 h-6 text-blue-600" />
          </a>
          <a href="https://twitter.com/[your-username]" aria-label="Twitter">
            <Twitter className="w-6 h-6 text-blue-600" />
          </a>
          <a href="https://linkedin.com/in/[your-username]" aria-label="LinkedIn">
            <Linkedin className="w-6 h-6 text-blue-600" />
          </a>
          <a href="mailto:[your-email]" aria-label="Email">
            <Mail className="w-6 h-6 text-blue-600" />
          </a>
        </div>
      </section>
    </div>
  );
};

export default Home;

