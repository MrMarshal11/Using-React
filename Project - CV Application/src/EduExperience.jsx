import { useState } from "react";

function EduExperience({addEduExperienceData}) {
  const [addEduExperienceVisible, setAddEduExperienceVisible] = useState(false);

  const toggleEduExperience = () => {
    addEduExperienceVisible
      ? setAddEduExperienceVisible(false)
      : setAddEduExperienceVisible(true);
  };

  const [schoolName, setSchoolName] = useState('');
  const [titleOfStudy, setTitleOfStudy] = useState('');
  const [dateOfStudy, setDateOfStudy] = useState('');

  const handleSave = () => {
    const newEduExperience = {
      schoolName,
      titleOfStudy,
      dateOfStudy,
    };
    addEduExperienceData(newEduExperience);
    // Clear local state
    setSchoolName('');
    setTitleOfStudy('');
    setDateOfStudy('');
    toggleEduExperience();
  };

  return (
    <div>
      <h3>Add Educational Experience?</h3>

      {!addEduExperienceVisible && <button onClick={toggleEduExperience}>Add</button>}

      {addEduExperienceVisible && (
        <div>
          <form className="form">
            <fieldset>
              <label>School Name: </label>
              <input
                value={schoolName}
                onChange={(e) => setSchoolName(e.target.value)}
              />
            </fieldset>

            <fieldset>
              <label>Title of Study: </label>
              <input
                value={titleOfStudy}
                onChange={(e) => setTitleOfStudy(e.target.value)}
              />
            </fieldset>

            <fieldset>
              <label>Date of Study: </label>
              <input
                value={dateOfStudy}
                onChange={(e) => setDateOfStudy(e.target.value)}
              />
            </fieldset>
          </form>
          <button onClick={handleSave}>Save</button>
          <button onClick={toggleEduExperience}>Remove</button>
        </div>
      )}
    </div>
  );
}

export default EduExperience;