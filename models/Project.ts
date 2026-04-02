import mongoose from 'mongoose';

const ProjectSchema = new mongoose.Schema({
  title: { type: String, required: true },
  category: { type: String, required: true },
  desc: { type: String, required: true },
  icon: { type: String, default: '🚀' },
  gradient: { type: String, default: 'from-purple-600 to-indigo-600' },
  stats: { type: String, default: '' },
  link: { type: String, default: '#' },
  github: { type: String, default: '#' },
  image: { type: String, default: '' },
  order: { type: Number, default: 0 },
  featured: { type: Boolean, default: true },
  createdAt: { type: Date, default: Date.now },
});

export default mongoose.models.Project || mongoose.model('Project', ProjectSchema);