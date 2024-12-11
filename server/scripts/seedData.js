import mongoose from 'mongoose';
import dotenv from 'dotenv';
import { Subject } from '../models/Subject.js';
import { connectDB } from '../config/database.js';

dotenv.config();

const initialSubjects = [
  {
    subjectName: "Mathematics",
    studyLevel: "1st Grade",
    description: "Learn about numbers, shapes, and patterns.",
    icon: "➕"
  },
  {
    subjectName: "Science",
    studyLevel: "1st Grade",
    description: "Explore the natural world through basic science concepts.",
    icon: "🔬"
  },
  {
    subjectName: "English",
    studyLevel: "1st Grade",
    description: "Develop reading and writing skills.",
    icon: "📚"
  },
  {
    subjectName: "Mathematics",
    studyLevel: "2nd Grade",
    description: "Advanced arithmetic and basic geometry.",
    icon: "➗"
  },
  {
    subjectName: "Science",
    studyLevel: "2nd Grade",
    description: "Learn about plants, animals, and simple machines.",
    icon: "🌱"
  }
];

const seedDatabase = async () => {
  try {
    await connectDB();
    
    // Clear existing data
    await Subject.deleteMany({});
    console.log('Cleared existing subjects');

    // Insert new data
    const createdSubjects = await Subject.insertMany(initialSubjects);
    console.log(`Successfully seeded ${createdSubjects.length} subjects`);

    // Log the inserted data
    console.log('\nSeeded subjects:');
    createdSubjects.forEach(subject => {
      console.log(`- ${subject.subjectName} (${subject.studyLevel})`);
    });

  } catch (error) {
    console.error('Error seeding database:', error);
  } finally {
    // Close the database connection
    await mongoose.connection.close();
    console.log('\nDatabase connection closed');
  }
};

// Run the seed function
seedDatabase();