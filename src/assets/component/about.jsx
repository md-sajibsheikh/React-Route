import Menu from "./../menu/menu";

const About = () => {
  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center">
      {/* Include the Menu component */}
      <Menu />

      <div className="bg-white p-8 rounded-xl shadow-lg w-full max-w-3xl mt-8">
        {/* Header */}
        <h1 className="text-4xl font-extrabold text-center text-indigo-600 mb-6">
          About Me
        </h1>

        {/* Profile Section */}
        <div className="flex flex-col items-center sm:flex-row sm:items-start sm:space-x-8">
          <img
            src="https://via.placeholder.com/150"
            alt="Profile"
            className="w-32 h-32 rounded-full mb-4 sm:mb-0"
          />
          <div className="text-center sm:text-left">
            <h2 className="text-2xl font-semibold text-gray-800">John Doe</h2>
            <p className="text-gray-600 mt-2">
              Software Engineer | React Developer
            </p>
          </div>
        </div>

        {/* Description Section */}
        <div className="mt-6 text-gray-700">
          <p className="text-lg">
            I m John Doe, a passionate software engineer with a love for
            building user-friendly web applications. I specialize in React,
            JavaScript, and Tailwind CSS. I believe in writing clean,
            maintainable code and always aim to learn new things to stay updated
            with the latest tech trends.
          </p>

          <div className="mt-6">
            <h3 className="text-xl font-semibold text-gray-800">Skills</h3>
            <ul className="list-disc pl-6 mt-2 text-gray-600">
              <li>React.js & JavaScript</li>
              <li>HTML & CSS (Tailwind CSS)</li>
              <li>Node.js & Express</li>
              <li>Git & GitHub</li>
              <li>Responsive Web Design</li>
            </ul>
          </div>
        </div>

        {/* Contact Section */}
        <div className="mt-6 text-center">
          <a
            href="mailto:johndoe@example.com"
            className="text-lg font-semibold text-indigo-600 hover:text-indigo-800"
          >
            Contact Me
          </a>
        </div>
      </div>
    </div>
  );
};

export default About;
