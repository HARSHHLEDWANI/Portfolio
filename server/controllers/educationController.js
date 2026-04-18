export const getEducation = (req, res) => {
  const education = [
    {
      institution: 'Symbiosis Institute of Technology',
      degree: "Bachelor's in Computer Science and Engineering",
      duration: 'July 2023 – May 2027',
      location: '',
    },
    {
      institution: 'Greenway Modern School',
      degree: 'High School Diploma',
      duration: 'April 2023',
      location: '',
    },
  ];

  res.json(education);
};


