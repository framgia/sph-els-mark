import React, { useState } from 'react';
import { Radio, RadioGroup, FormControlLabel } from '@mui/material';
import ButtonAddWord from '@/components/common/ButtonAddWord';
import InputFieldAddWord from '@/components/common/InputFieldAddWord';
import AdminNavbar from '@/components/common/AdminNavbar';

interface AddWordPageProps {}

const AddWordPage: React.FC<AddWordPageProps> = () => {
  const [selectedOption, setSelectedOption] = useState<string>('');

  const handleOptionChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSelectedOption(event.target.value);
  };

  return (
    <>
      <AdminNavbar title="E-Learning System | Admin" />
      <div className="ml-[15rem] mt-20 flex justify-evenly w-[64rem] h-[30rem] mx-auto bg-white rounded-xl shadow-md ">
        <div>
          <h1 className="ml-[43px] mt-[40px] ">Add Word</h1>
          <h3 className="ml-[47px] mt-[10px] ">Word</h3>
          <InputFieldAddWord id="question" name="question" />
        </div>
        <div className="ml-[5rem]">
          <h3 className="mt-[60px] ml-[47px]">Choices</h3>
          <RadioGroup
            aria-label="options"
            name="options"
            value={selectedOption}
            onChange={handleOptionChange}
          >
            <FormControlLabel
              value="option1"
              control={<Radio />}
              label={<InputFieldAddWord id="option1" name="option1" />}
            />
            <FormControlLabel
              value="option2"
              control={<Radio />}
              label={<InputFieldAddWord id="option2" name="option2" />}
            />
            <FormControlLabel
              value="option3"
              control={<Radio />}
              label={<InputFieldAddWord id="option3" name="option3" />}
            />
            <FormControlLabel
              value="option4"
              control={<Radio />}
              label={<InputFieldAddWord id="option4" name="option4" />}
            />
          </RadioGroup>
          <ButtonAddWord text="Submit" />
        </div>
      </div>
    </>
  );
};

export default AddWordPage;
