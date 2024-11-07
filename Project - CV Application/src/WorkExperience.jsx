import { useState } from "react";

function WorkExperience({addWorkExperienceData}) {
  const [addWorkExperienceVisible, setAddWorkExperienceVisible] =
    useState(false);

  const toggleWorkExperience = () => {
    addWorkExperienceVisible
      ? setAddWorkExperienceVisible(false)
      : setAddWorkExperienceVisible(true);
  };

  const [companyName, setCompanyName] = useState('');
  const [positionTitle, setPositionTitle] = useState('');
  const [mainResponsibility, setMainResponsibility] = useState('');
  const [dateWorked, setDateWorked] = useState('');

  const handleSave = () => {
    const newWorkExperience = {
      companyName,
      positionTitle,
      mainResponsibility,
      dateWorked,
    };
    addWorkExperienceData(newWorkExperience);
    // Clear local state
    setCompanyName('');
    setPositionTitle('');
    setMainResponsibility('');
    setDateWorked('');
    toggleWorkExperience();
  };

  return (
    <div>
      <h3>Add Work Experience?</h3>

      {!addWorkExperienceVisible && (
        <button onClick={toggleWorkExperience}>Add</button>
      )}

      {addWorkExperienceVisible && (
        <div>
          <form className="form">
            <fieldset>
              <label>Company Name: </label>
              <input
                value={companyName}
                onChange={(e) => setCompanyName(e.target.value)}
              />
            </fieldset>

            <fieldset>
              <label>Position Title: </label>
              <input
                value={positionTitle}
                onChange={(e) => setPositionTitle(e.target.value)}
              />
            </fieldset>

            <fieldset>
              <label>Main Responsibility of Your Job: </label>
              <input
                value={mainResponsibility}
                onChange={(e) => setMainResponsibility(e.target.value)}
              />
            </fieldset>

            <fieldset>
              <label>Date Worked (From and Until): </label>
              <input
                value={dateWorked}
                onChange={(e) => setDateWorked(e.target.value)}
              />
            </fieldset>
          </form>
          <button onClick={handleSave}>Save</button>
          <button onClick={toggleWorkExperience}>Remove</button>
        </div>
      )}
    </div>
  );
}

export default WorkExperience;