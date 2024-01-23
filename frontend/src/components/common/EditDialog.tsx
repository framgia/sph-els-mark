import DummyTest from '@/dummytest';
import {
  Button,
  Dialog,
  DialogContent,
  DialogTitle,
  TextField,
} from '@mui/material';
import React, { useState, useEffect } from 'react';

interface EditDialogProps {
  open: boolean;
  onClose: () => void;
  selectedCategoryId: number;
}

const EditDialog: React.FC<EditDialogProps> = ({
  open,
  onClose,
  selectedCategoryId,
}) => {
  const [editedTitle, setEditedTitle] = useState('');
  const [editedChoices, setEditedChoices] = useState<
    { options: string; isCorrect: boolean }[]
  >([]);

  useEffect(() => {
    const selectedCategory = DummyTest.find(
      (category) => category.id === selectedCategoryId
    );

    if (selectedCategory) {
      setEditedTitle(selectedCategory.category_title);
      setEditedChoices(selectedCategory.choices);
    }
  }, [selectedCategoryId]);

  const handleTitleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setEditedTitle(event.target.value);
  };

  const handleChoiceChange = (
    event: React.ChangeEvent<{ value: unknown }>,
    index: number
  ) => {
    const newChoices = [...editedChoices];
    newChoices[index].options = event.target.value as string;
    setEditedChoices(newChoices);
  };

  const handleSave = () => {
    // *Note: Logic goes here for saving*
    onClose();
  };

  return (
    <Dialog open={open} onClose={onClose} maxWidth="md">
      <DialogTitle style={{ fontWeight: 'bolder', color: '#3B82F6' }}>
        Edit Category
      </DialogTitle>
      <DialogContent className="custom-dialog-content">
        <TextField
          label="Category Title"
          value={editedTitle}
          onChange={handleTitleChange}
          fullWidth
          style={{ marginTop: '10px' }}
        />

        <div className="space-y-4 mt-4">
          {editedChoices.map((choice, index) => (
            <TextField
              key={index}
              label={`Choice ${index + 1}`}
              value={choice.options}
              onChange={(event) => handleChoiceChange(event, index)}
              fullWidth
            />
          ))}
        </div>
        <Button
          color="primary"
          onClick={handleSave}
          style={{ marginTop: '30px' }}
        >
          Save
        </Button>
      </DialogContent>
    </Dialog>
  );
};

export default EditDialog;
