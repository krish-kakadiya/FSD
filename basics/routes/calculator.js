import { Router } from "express";

const router = Router();

router.post("/calculate", (req, res) => {
  const { num1, num2, operation } = req.body;

  // Validate input
  const n1 = parseFloat(num1);
  const n2 = parseFloat(num2);

  if (isNaN(n1) || isNaN(n2)) {
    return res.send("<h2>Invalid input! Please enter numbers only.</h2><a href='/'>Go Back</a>");
  }

  let result;

  switch (operation) {
    case "add":
      result = n1 + n2;
      break;
    case "subtract":
      result = n1 - n2;
      break;
    case "multiply":
      result = n1 * n2;
      break;
    case "divide":
      if (n2 === 0) {
        return res.send("<h2>Cannot divide by zero!</h2><a href='/'>Go Back</a>");
      }
      result = n1 / n2;
      break;
    default:
      return res.send("<h2>Unknown operation!</h2><a href='/'>Go Back</a>");
  }

  // Display result page
  res.send(`
    <h2>Result: ${result}</h2>
    <a href="/">Try Again</a>
  `);
});

export default router;
