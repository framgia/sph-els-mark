import DummyTest from '@/dummytest';
import { Button, Dialog, DialogContent, DialogTitle } from '@mui/material';
import React, { useState, useEffect } from 'react';

interface DeleteDialogProps {
  open: boolean;
  onClose: () => void;
  selectedCategoryId: number;
}

const DeleteDialog: React.FC<DeleteDialogProps> = ({
  open,
  onClose,
  selectedCategoryId,
}) => {
  const [selectedCategory, setSelectedCategory] = useState<{
    category_title: string;
    choices: { options: string; isCorrect: boolean }[];
  } | null>(null);

  useEffect(() => {
    const category = DummyTest.find(
      (category) => category.id === selectedCategoryId
    );

    if (category) {
      setSelectedCategory({
        category_title: category.category_title,
        choices: category.choices,
      });
    }
  }, [selectedCategoryId]);

  const handleDelete = () => {
    // *Note: Logic goes here for deleting*
    console.log(`Category with id ${selectedCategoryId} will be deleted.`);
    onClose();
  };

  return (
    <Dialog open={open} onClose={onClose} maxWidth="md">
      <DialogTitle style={{ fontWeight: 'bolder', color: '#3B82F6' }}>
        Delete Category
      </DialogTitle>
      <DialogContent className="custom-dialog-content">
        {selectedCategory && (
          <>
            <p>Are you sure you want to delete the following category?</p>
            <p>
              <strong>Title:</strong> {selectedCategory.category_title}
            </p>
            <p>
              <strong>Choices:</strong>
            </p>
            <ul>
              {selectedCategory.choices.map((choice, index) => (
                <li key={index}>{choice.options}</li>
              ))}
            </ul>
          </>
        )}
        <Button
          color="secondary"
          onClick={handleDelete}
          style={{ marginTop: '30px' }}
        >
          Delete
        </Button>
      </DialogContent>
    </Dialog>
  );
};

export default DeleteDialog;
