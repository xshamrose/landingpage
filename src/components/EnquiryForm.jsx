import React, { useState } from 'react';
import {
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  TextField,
  Button,
  Box,
  Typography,
  Alert,
} from '@mui/material';
import { useForm } from 'react-hook-form';

const EnquiryForm = ({ open, onClose, type = 'general' }) => {
  const [submitted, setSubmitted] = useState(false);
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();

  const onSubmit = (data) => {
    // Here you would typically send the data to your backend
    console.log('Form submitted:', data);
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      reset();
      onClose();
    }, 2000);
  };

  const getTitle = () => {
    switch (type) {
      case 'call':
        return 'Request a Call Back';
      case 'whatsapp':
        return 'Connect via WhatsApp';
      case 'email':
        return 'Send us an Email';
      default:
        return 'General Enquiry';
    }
  };

  return (
    <Dialog open={open} onClose={onClose} maxWidth="sm" fullWidth>
      <DialogTitle sx={{ textAlign: 'center', fontWeight: 'bold' }}>
        {getTitle()}
      </DialogTitle>
      <form onSubmit={handleSubmit(onSubmit)}>
        <DialogContent>
          {submitted ? (
            <Alert severity="success" sx={{ mb: 2 }}>
              Thank you for your enquiry! We'll get back to you soon.
            </Alert>
          ) : (
            <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
              <TextField
                label="Full Name"
                fullWidth
                {...register('name', { required: 'Name is required' })}
                error={!!errors.name}
                helperText={errors.name?.message}
              />
              <TextField
                label="Mobile Number"
                fullWidth
                {...register('phone', {
                  required: 'Phone number is required',
                  pattern: {
                    value: /^[0-9]{10}$/,
                    message: 'Please enter a valid 10-digit phone number',
                  },
                })}
                error={!!errors.phone}
                helperText={errors.phone?.message}
              />
              <TextField
                label="Email"
                fullWidth
                {...register('email', {
                  required: 'Email is required',
                  pattern: {
                    value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                    message: 'Please enter a valid email address',
                  },
                })}
                error={!!errors.email}
                helperText={errors.email?.message}
              />
              <TextField
                label="Message"
                fullWidth
                multiline
                rows={4}
                {...register('message')}
              />
              <Typography variant="body2" color="text.secondary">
                We'll get back to you within 24 hours.
              </Typography>
            </Box>
          )}
        </DialogContent>
        <DialogActions sx={{ px: 3, pb: 3 }}>
          <Button onClick={onClose} color="inherit">
            Cancel
          </Button>
          <Button
            type="submit"
            variant="contained"
            color="primary"
            disabled={submitted}
          >
            Submit
          </Button>
        </DialogActions>
      </form>
    </Dialog>
  );
};

export default EnquiryForm;
