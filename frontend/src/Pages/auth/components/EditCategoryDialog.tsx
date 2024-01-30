import React, { useEffect } from 'react';
import { useForm } from 'react-hook-form';
import Dialog from '@material-ui/core/Dialog';
import DialogTitle from '@material-ui/core/DialogTitle';
import DialogContent from '@material-ui/core/DialogContent';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import dummyCategories from '@/dummycategory';

interface EditCategoryDialogProps {
  open: boolean;
  onClose: () => void;
  selectedCategoryId: number;
}

interface CategoryForm {
  editedTitle: string;
  editedDescription: string;
}

const EditCategoryDialog: React.FC<EditCategoryDialogProps> = ({
  open,
  onClose,
  selectedCategoryId,
}) => {
  const { register, handleSubmit, setValue } = useForm<CategoryForm>();

  useEffect(() => {
    const selectedCategory = dummyCategories.find(
      (category) => category.id === selectedCategoryId
    );

    if (selectedCategory) {
      setValue('editedTitle', selectedCategory.name);
      setValue('editedDescription', selectedCategory.description);
    }
  }, [selectedCategoryId, setValue]);

  const onSubmit = (data: CategoryForm) => {
    onClose();
  };

  return (
    <Dialog open={open} onClose={onClose} maxWidth="md">
      <DialogTitle style={{ fontWeight: 'bolder', color: '#3B82F6' }}>
        Edit Category
      </DialogTitle>
      <DialogContent className="custom-dialog-content">
        <form onSubmit={handleSubmit(onSubmit)}>
          <TextField
            label="Category Title"
            {...register('editedTitle')}
            fullWidth
          />

          <TextField
            label="Description"
            {...register('editedDescription')}
            multiline
            minRows={1.5}
            maxRows={5}
            fullWidth
          />
          <Button type="submit" color="primary" style={{ marginTop: '30px' }}>
            Save
          </Button>
        </form>
      </DialogContent>
    </Dialog>
  );
};

export default EditCategoryDialog;
