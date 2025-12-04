export const validateEmail = (email: string): boolean => {
  const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return re.test(email);
};

export const validateRequired = (value: string): boolean => {
  return value.trim().length > 0;
};

export const validateSouthAfricanPhone = (phone: string): boolean => {
  // Basic validation for SA numbers (10 digits, starts with 0)
  // Allows optional spaces e.g., 082 123 4567 or 0821234567
  const re = /^0\d{2}\s?\d{3}\s?\d{4}$/;
  return re.test(phone);
};

export const validateCIPC = (reg: string): boolean => {
  // Validates CIPC format: YYYY/NNNNNN/NN or YYYY / NNNNNN / NN
  // Allows optional spaces around slashes
  const re = /^\d{4}\s?\/\s?\d{6,7}\s?\/\s?\d{2}$/;
  return re.test(reg);
};