import React from 'react';
import { motion } from 'framer-motion';

const skillCategories = [
  {
    title: "Programming",
    skills: ["Python", "JavaScript", "Java", "C++", "SQL"],
    color: "from-blue-500 to-blue-600",
  },
  {
    title: "Frontend",
    skills: ["React", "HTML/CSS", "Tailwind CSS", "Framer Motion"],
    color: "from-emerald-500 to-teal-500",
  },
  {
    title: "Backend",
    skills: ["Node.js", "Flask", "MongoDB", "MySQL"],
    color: "from-purple-500 to-pink-500",
  },
  {
    title: "AI/ML",
    skills: ["TensorFlow", "PyTorch", "CNNs", "NLP"],
    color: "from-orange-500 to-red-500",
  },
];

export default function SkillsSection() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
      {skillCategories.map((category, catIndex) => (
        <motion.div
          key={category.title}
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: catIndex * 0.1 }}
          viewport={{ once: true }}
          className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all border border-slate-100"
        >
          <div className={`h-1 w-16 bg-gradient-to-r ${category.color} rounded-full mb-4`} />
          <h3 className="text-lg font-bold text-slate-900 mb-4">{category.title}</h3>
          <div className="space-y-2">
            {category.skills.map((skill, skillIndex) => (
              <motion.div
                key={skill}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: catIndex * 0.1 + skillIndex * 0.05 }}
                viewport={{ once: true }}
                whileHover={{ x: 5 }}
                className="flex items-center gap-2"
              >
                <div className={`w-2 h-2 bg-gradient-to-r ${category.color} rounded-full`} />
                <span className="text-slate-600 text-sm font-medium">{skill}</span>
              </motion.div>
            ))}
          </div>
        </motion.div>
      ))}
    </div>
  );
}