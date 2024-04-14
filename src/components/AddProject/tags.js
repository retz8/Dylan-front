const tags = [
  // Web Development
  { label: "HTML", value: "html", type: "web" },
  { label: "CSS", value: "css", type: "web" },
  { label: "JavaScript", value: "javascript", type: "web" },
  { label: "TypeScript", value: "typescript", type: "web" },
  { label: "React", value: "react", type: "web" },
  { label: "NextJS", value: "next", type: "web" },
  { label: "Angular", value: "angular", type: "web" },
  { label: "Vue.js", value: "vuejs", type: "web" },
  { label: "Bootstrap", value: "bootstrap", type: "web" },
  { label: "jQuery", value: "jquery", type: "web" },
  { label: "Node.js", value: "nodejs", type: "web" },
  { label: "Python", value: "python", type: "web" },
  { label: "Java", value: "java", type: "web" },
  { label: "C#", value: "csharp", type: "web" },
  { label: "PHP", value: "php", type: "web" },
  { label: "Ruby", value: "ruby", type: "web" },
  { label: "Go", value: "go", type: "web" },
  { label: "Django", value: "django", type: "web" },
  { label: "Spring", value: "spring", type: "web" },
  { label: "Express.js", value: "expressjs", type: "web" },
  { label: "Laravel", value: "laravel", type: "web" },
  { label: "Ruby on Rails", value: "rubyonrails", type: "web" },
  { label: "MySQL", value: "mysql", type: "web" },
  { label: "PostgreSQL", value: "postgresql", type: "web" },
  { label: "MongoDB", value: "mongodb", type: "web" },
  { label: "REST APIs", value: "rest_apis", type: "web" },

  // Mobile Development
  { label: "Swift", value: "swift", type: "mobile" },
  { label: "Objective-C", value: "objectivec", type: "mobile" },
  { label: "Kotlin", value: "kotlin", type: "mobile" },
  { label: "React Native", value: "react_native", type: "mobile" },
  { label: "Flutter", value: "flutter", type: "mobile" },
  { label: "Xamarin", value: "xamarin", type: "mobile" },

  // Data Science & Machine Learning
  { label: "Python", value: "python_dsml", type: "ds_ml" }, // Duplicate for clarity
  { label: "R", value: "r", type: "ds_ml" },
  { label: "SQL", value: "sql", type: "ds_ml" },
  { label: "Scala", value: "scala", type: "ds_ml" },
  { label: "Julia", value: "julia", type: "ds_ml" },
  { label: "TensorFlow", value: "tensorflow", type: "ds_ml" },
  { label: "PyTorch", value: "pytorch", type: "ds_ml" },
  { label: "scikit-learn", value: "scikit_learn", type: "ds_ml" },
  { label: "Pandas", value: "pandas", type: "ds_ml" },
  { label: "NumPy", value: "numpy", type: "ds_ml" },

  // Other Specialized Domains
  { label: "C++", value: "cpp", type: "others" },
  { label: "Rust", value: "rust", type: "others" },
  { label: "Linux", value: "linux", type: "others" },
  { label: "Docker", value: "docker", type: "others" },
  { label: "Kubernetes", value: "kubernetes", type: "others" },
  { label: "Jenkins", value: "jenkins", type: "others" },
  { label: "Unity", value: "unity", type: "others" },
  { label: "Unreal Engine", value: "unreal_engine", type: "others" },
  { label: "Solidity", value: "solidity", type: "others" },
  { label: "Qiskit", value: "qiskit", type: "others" },
  { label: "ARKit", value: "arkit", type: "others" },
  // ... Add more as needed
];

const techStackMap = new Map();

tags.forEach((option) => {
  techStackMap.set(option.label, option.type);
});

export { tags, techStackMap };
