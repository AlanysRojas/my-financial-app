export interface ValidationError {
  [key: string]: string;
}

export const validateProductForm = (product: any): ValidationError => {
  const errors: ValidationError = {};

  if (!product.id || product.id.length < 3 || product.id.length > 10) {
    errors.id = "El ID es requerido y debe tener entre 3 y 10 caracteres";
  }
  if (!product.name || product.name.length < 5 || product.name.length > 100) {
    errors.name =
      "El nombre es requerido y debe tener entre 5 y 100 caracteres";
  }
  // Añadir más validaciones según los requisitos del PDF

  return errors;
};
