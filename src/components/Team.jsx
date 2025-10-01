export default function Team() {
  const team = [
    {
      name: "Kshitij Pandey",
      role: "Founder & CEO",
      bio: "Leads the vision and strategy of DevTinder, ensuring we connect developers worldwide.",
    },
    {
      name: "Ananya Sharma",
      role: "CTO",
      bio: "Heads the technology team, focusing on building scalable and secure systems.",
    },
    {
      name: "Ravi Mehta",
      role: "Product Manager",
      bio: "Oversees product development, ensuring user experience is at the core of every feature.",
    },
    {
      name: "Sneha Kapoor",
      role: "Lead Designer",
      bio: "Designs intuitive and beautiful user interfaces for a seamless experience.",
    },
  ];

  return (
    <div className="max-w-5xl mx-auto p-6 text-gray-800">
      <h1 className="text-3xl font-bold mb-4">Meet Our Team</h1>
      <p className="mb-8 text-gray-600">
        At <span className="font-semibold">DevTinder</span>, we are a passionate
        team of developers, designers, and innovators committed to connecting
        the global developer community.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {team.map((member, index) => (
          <div
            key={index}
            className="bg-white shadow-md rounded-2xl p-6 hover:shadow-lg transition"
          >
            <div className="h-20 w-20 rounded-full bg-gray-300 flex items-center justify-center text-xl font-bold text-white mb-4">
              {member.name.charAt(0)}
            </div>
            <h2 className="text-lg font-semibold">{member.name}</h2>
            <p className="text-sm text-blue-600 mb-2">{member.role}</p>
            <p className="text-gray-600 text-sm">{member.bio}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
