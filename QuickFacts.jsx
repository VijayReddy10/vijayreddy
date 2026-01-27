import React from 'react';
import { motion } from 'framer-motion';
import { Globe, Briefcase, Heart } from 'lucide-react';

const facts = [
  {
    icon: Globe,
    label: "Languages",
    value: "English, Telugu, Hindi",
    color: "from-blue-500 to-cyan-500",
  },
  {
    icon: Briefcase,
    label: "Current Role",
    value: "AI & Full-Stack Developer",
    color: "from-purple-500 to-pink-500",
  },
  {
    icon: Heart,
    label: "Interests",
    value: "AI, Web Dev, Problem Solving",
    color: "from-emerald-500 to-teal-500",
  },
];

export default function QuickFacts() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
      {facts.map((fact, index) => (
        <motion.div
          key={fact.label}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: index * 0.1 }}
          viewport={{ once: true }}
          whileHover={{ y: -5, scale: 1.02 }}
          className="bg-white rounded-2xl p-5 shadow-lg hover:shadow-xl transition-shadow border border-slate-100"
        >
          <div className={`w-12 h-12 bg-gradient-to-br ${fact.color} rounded-xl flex items-center justify-center mb-3`}>
            <fact.icon className="w-6 h-6 text-white" />
          </div>
          <p className="text-slate-500 text-sm font-medium">{fact.label}</p>
          <p className="text-slate-900 font-bold mt-1">{fact.value}</p>
        </motion.div>
      ))}
    </div>
  );
}
