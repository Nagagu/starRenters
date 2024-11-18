import React, { useState } from "react";
import { Formik, Form, Field } from "formik";
import { Button, TextField, Typography } from "@mui/material";
import * as Yup from "yup";
import { createReview } from "../../api/Reviews";

const ReviewSchema = Yup.object().shape({
  tenantName: Yup.string().required("El nombre es obligatorio"),
  comments: Yup.string().required("La reseña es obligatoria"),
  rating: Yup.number().min(1).max(5).required("La calificación es obligatoria"),
});

const AddReviewForm = () => {
  const handleSubmit = (values) => {
    try {
      createReview(values);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <Formik
      initialValues={{ tenantName: "", comments: "", rating: "" }}
      validationSchema={ReviewSchema}
      onSubmit={handleSubmit}
    >
      {({ errors, touched }) => (
        <Form>
          <Typography variant="h6" gutterBottom>
            Agregar Reseña
          </Typography>
          <Field
            as={TextField}
            name="tenantName"
            label="Nombre del Inquilino"
            fullWidth
            margin="normal"
            error={touched.tenantName && Boolean(errors.tenantName)}
            helperText={touched.tenantName && errors.tenantName}
          />
          <Field
            as={TextField}
            name="comments"
            label="Reseña"
            fullWidth
            margin="normal"
            multiline
            rows={4}
            error={touched.review && Boolean(errors.review)}
            helperText={touched.review && errors.review}
          />
          <Field
            as={TextField}
            name="rating"
            label="Calificación (1-5)"
            type="number"
            fullWidth
            margin="normal"
            error={touched.rating && Boolean(errors.rating)}
            helperText={touched.rating && errors.rating}
          />
          <Button type="submit" variant="contained" color="primary">
            Enviar Reseña
          </Button>
        </Form>
      )}
    </Formik>
  );
};

export default AddReviewForm;
