export const getSkills = (req, res) => {
  const skills = {
    categories: [
      {
        category: 'Languages',
        skills: ['Python', 'Java', 'C++', 'C'],
      },
      {
        category: 'Databases & OS',
        skills: ['MySQL', 'Linux', 'Windows', 'Ubuntu'],
      },
      {
        category: 'Full-Stack Development',
        skills: ['React.js', 'Node.js', 'MongoDB'],
      },
      {
        category: 'Libraries (ML / Data)',
        skills: ['Pandas', 'NumPy', 'Scikit-learn', 'PyTorch'],
      },
      {
        category: 'Frameworks & Tools',
        skills: ['Git', 'Google Colab', 'Visual Studio Code'],
      },
      {
        category: 'Soft Skills',
        skills: ['Critical Thinking', 'Problem Solving'],
      },
    ],
  };

  res.json(skills);
};


