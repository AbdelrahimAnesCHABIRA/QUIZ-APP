import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { SubjectCard } from "../components/SubjectCard";
import type { Subject } from "../types/subject";
import { getSubjectsByLevel } from "../api/subjects";

export const SubjectPage: React.FC = () => {
  const { id, year } = useParams<{ id?: string; year?: string }>();
  const yearString = year || '';
  const navigate = useNavigate();
  const [subjects, setSubjects] = useState<Subject[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchSubjects = async () => {
      setLoading(true);
      setError(null);
      try {
        const subjectsData = await getSubjectsByLevel(yearString);
        setSubjects(subjectsData);
      } catch (error) {
        setError('Failed to fetch subjects. Please try again later.');
        console.error('Error fetching subjects:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchSubjects();
  }, [yearString]);

  const handleSubjectClick = (yearString: string, subjectId: string, subjectName: string) => {
    navigate(`/student/${id}/subjects/${yearString}/chapters/${subjectId}`, { state: { subjectName } });
  };

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>{error}</div>;
  }

  return (
    <div className="container mx-auto p-6">
      <h1 className="text-3xl font-bold mb-6 text-gray-800 select-none">
        Subjects for {yearString}
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {subjects.map((subject) => (
          <div key={subject._id}>
            <SubjectCard
              id={subject._id}
              name={subject.subjectName}
              icon={subject.icon}
              year={yearString}
              onClick={() => handleSubjectClick(yearString, subject._id, subject.subjectName)}
            />
          </div>
        ))}
      </div>
    </div>
  );
};
