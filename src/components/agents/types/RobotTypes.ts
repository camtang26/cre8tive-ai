export type Robot = {
  color: string;
  x: number;
  scale: number;
  role: string;
  textColor: string;
};

export const ROBOTS: Robot[] = [
  {
    color: '#0EA5E9', // Ocean Blue
    x: 16.67,
    scale: 1.4,
    role: 'Content Creator',
    textColor: '#3B82F6' // Neon Blue
  },
  {
    color: '#F97316', // Bright Orange
    x: 33.33,
    scale: 1.3,
    role: 'Social Media Manager',
    textColor: '#FB923C' // Neon Orange
  },
  {
    color: '#10B981', // Emerald Green
    x: 50,
    scale: 1.4,
    role: 'Marketing Lead',
    textColor: '#4ADE80' // Neon Green
  },
  {
    color: '#ea384c', // Red
    x: 66.67,
    scale: 1.3,
    role: 'SEO Specialist',
    textColor: '#FB7185' // Neon Red
  },
  {
    color: '#9b87f5', // Purple
    x: 83.33,
    scale: 1.4,
    role: 'Data Analyst',
    textColor: '#A78BFA' // Neon Purple
  }
];