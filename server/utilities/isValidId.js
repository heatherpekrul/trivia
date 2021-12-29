/* IsValidId */

module.exports = (num) => {
  return (
    !isNaN(num)
    && parseInt(Number(num)) == num
    && !isNaN(parseInt(num, 10))
  );
};
