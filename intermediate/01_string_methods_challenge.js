const fullName = function (firstName, lastName) {
  const fullName = `${firstName} ${lastName}`.toUpperCase();
  return fullName;
};

console.log(fullName(`Sagar`, `Bera`), typeof fullName);
