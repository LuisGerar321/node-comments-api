export const findAllStudents = async () => {
  try {
    return new Array(10).fill(Math.floor(Math.random() * (75 - 45 + 1) + 45));
  } catch (error) {}
};
