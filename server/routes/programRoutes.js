import express from 'express';
import Program from '../models/Program.js';

const router = express.Router();

export const defaultPrograms = [
  {
    _id: 'prog_1',
    title: "Public Speaking & Oratory Mastery",
    category: "Public Speaking",
    description: "Speak with confidence, articulate ideas clearly, and master stage presence.",
    icon: "🎙",
    targetAudience: "Grades 5 - 12",
    duration: "6-Week Intensive Program",
    featured: true,
    highlights: ["Stage Presence & Body Language", "Vocal Modulation", "Overcoming Stage Fear"]
  },
  {
    _id: 'prog_2',
    title: "Debate & Critical Discussion",
    category: "Debate & Discussion",
    description: "Build reasoning, structured argumentation, and global perspective.",
    icon: "💬",
    targetAudience: "Grades 7 - 12",
    duration: "4 Weeks Module",
    featured: true,
    highlights: ["Logic & Fallacy Detection", "Rebuttal Techniques", "Parliamentary Debate Format"]
  },
  {
    _id: 'prog_3',
    title: "Presentation & Visual Delivery",
    category: "Presentation Skills",
    description: "Create and deliver impactful, persuasive slide presentations and speeches.",
    icon: "▣",
    targetAudience: "Grades 6 - 12",
    duration: "3 Weeks Module",
    featured: false,
    highlights: ["Visual Storytelling", "Audience Engagement", "Data Delivery"]
  },
  {
    _id: 'prog_4',
    title: "Storytelling & Narrative Craft",
    category: "Storytelling",
    description: "Turn ideas, personal experiences, and concepts into inspiring stories.",
    icon: "📖",
    targetAudience: "Grades 3 - 10",
    duration: "4 Weeks Module",
    featured: false,
    highlights: ["Narrative Structure", "Empathy & Emotion", "Hooking the Audience"]
  },
  {
    _id: 'prog_5',
    title: "Leadership & Team Communication",
    category: "Leadership",
    description: "Lead with purpose, collaborate effectively, and inspire peers.",
    icon: "♟",
    targetAudience: "Student Council & Prefects",
    duration: "Special Bootcamp",
    featured: true,
    highlights: ["Conflict Resolution", "Delegation & Trust", "Ethical Leadership"]
  },
  {
    _id: 'prog_6',
    title: "Everyday Communication & Etiquette",
    category: "Communication Skills",
    description: "Improve interpersonal interactions, active listening, and social confidence.",
    icon: "☏",
    targetAudience: "All Grade Levels",
    duration: "Ongoing Curriculum",
    featured: false,
    highlights: ["Active Listening", "Assertive Expression", "Non-verbal Cues"]
  },
  {
    _id: 'prog_7',
    title: "Career Development & Campus Readiness",
    category: "Career Development",
    description: "Prepare students for university interviews, resume building, and career choices.",
    icon: "🎓",
    targetAudience: "Grades 10 - 12",
    duration: "Intensive Series",
    featured: true,
    highlights: ["Mock Interviews", "Personal Statements", "Networking Skills"]
  },
  {
    _id: 'prog_8',
    title: "Business Communication & Professional Writing",
    category: "Business Communication",
    description: "Master formal email writing, business pitch decks, and professional dialogue.",
    icon: "💼",
    targetAudience: "Grades 9 - 12",
    duration: "4 Weeks Module",
    featured: false,
    highlights: ["Pitching & Negotiation", "Executive Summary Writing", "Professional Etiquette"]
  }
];

let memoryPrograms = [...defaultPrograms];

// GET /api/programs
router.get('/', async (req, res) => {
  try {
    const { category } = req.query;

    if (req.dbConnected) {
      let query = {};
      if (category && category !== 'All') {
        query.category = category;
      }
      const programs = await Program.find(query).sort({ createdAt: -1 });
      if (programs.length > 0) return res.json(programs);
      
      await Program.insertMany(defaultPrograms.map(({ _id, ...rest }) => rest));
      const seeded = await Program.find(query);
      return res.json(seeded);
    } else {
      let filtered = [...memoryPrograms];
      if (category && category !== 'All') {
        filtered = filtered.filter(p => p.category === category);
      }
      return res.json(filtered);
    }
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// POST /api/programs
router.post('/', async (req, res) => {
  try {
    const { title, category, description, icon, targetAudience, duration, highlights } = req.body;
    if (!title || !category || !description) {
      return res.status(400).json({ error: 'Missing required program fields' });
    }

    const newDoc = {
      title,
      category,
      description,
      icon: icon || '🎙',
      targetAudience: targetAudience || 'All Grades',
      duration: duration || 'Flexible',
      highlights: highlights || []
    };

    if (req.dbConnected) {
      const created = await Program.create(newDoc);
      return res.status(201).json(created);
    } else {
      const memObj = { _id: `prog_${Date.now()}`, ...newDoc };
      memoryPrograms.unshift(memObj);
      return res.status(201).json(memObj);
    }
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

export default router;
