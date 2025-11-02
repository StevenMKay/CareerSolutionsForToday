// Practice coding problems data
window.practiceProblems = [
  // SQL Problems
  {
    id: 'sql-001',
    language: 'SQL',
    title: 'Find All Employees',
    difficulty: 'Easy',
    description: 'Write a SQL query to select all employees from the "employees" table.',
    examples: [
      { input: 'employees table with columns: id, name, department', output: 'All rows from employees table' }
    ],
    starterCode: '-- Write your SQL query here\n',
    expectedOutput: 'select * from employees',
    validSolutions: ['select * from employees', 'SELECT * FROM employees', 'select * from employees;'],
    solution: 'SELECT * FROM employees;',
    explanation: 'This query selects all columns (*) from the employees table.',
    hint: 'Use SELECT * FROM to get all columns from a table.'
  },
  {
    id: 'sql-002',
    language: 'SQL',
    title: 'Filter by Department',
    difficulty: 'Easy',
    description: 'Write a SQL query to find all employees in the "IT" department.',
    examples: [
      { input: 'employees(id, name, department)', output: 'Only employees where department = "IT"' }
    ],
    starterCode: '-- Write your SQL query here\nSELECT * FROM employees\nWHERE ',
    expectedOutput: 'department = "IT"',
    validSolutions: ['department = "IT"', 'department = \'IT\'', 'department="IT"'],
    solution: 'SELECT * FROM employees WHERE department = "IT";',
    explanation: 'Use WHERE clause to filter rows based on a condition.',
    hint: 'Use WHERE department = "IT" to filter by department.'
  },
  {
    id: 'sql-003',
    language: 'SQL',
    title: 'Count Employees by Department',
    difficulty: 'Medium',
    description: 'Write a SQL query to count the number of employees in each department.',
    examples: [
      { input: 'employees(id, name, department)', output: 'department | count' }
    ],
    starterCode: '-- Write your SQL query here\n',
    expectedOutput: 'count(*)',
    validSolutions: ['COUNT(*)', 'count(*)', 'GROUP BY department'],
    solution: 'SELECT department, COUNT(*) as employee_count FROM employees GROUP BY department;',
    explanation: 'Use COUNT(*) with GROUP BY to count rows for each group.',
    hint: 'Use COUNT(*) and GROUP BY department.'
  },

  // Python Problems
  {
    id: 'python-001',
    language: 'Python',
    title: 'Two Sum',
    difficulty: 'Easy',
    description: 'Given an array of integers and a target sum, return the indices of two numbers that add up to the target.',
    examples: [
      { input: 'nums = [2,7,11,15], target = 9', output: '[0, 1]' }
    ],
    starterCode: 'def two_sum(nums, target):\n    # Write your code here\n    pass',
    expectedOutput: 'return',
    validSolutions: ['for i in range', 'enumerate', 'return [i, j]', 'nums[i] + nums[j] == target'],
    solution: `def two_sum(nums, target):
    for i in range(len(nums)):
        for j in range(i + 1, len(nums)):
            if nums[i] + nums[j] == target:
                return [i, j]
    return []`,
    explanation: 'Use nested loops to check all pairs of numbers.',
    hint: 'Try using nested loops to check all pairs of numbers.'
  },
  {
    id: 'python-002',
    language: 'Python',
    title: 'Reverse String',
    difficulty: 'Easy',
    description: 'Write a function to reverse a string.',
    examples: [
      { input: '"hello"', output: '"olleh"' }
    ],
    starterCode: 'def reverse_string(s):\n    # Write your code here\n    pass',
    expectedOutput: 'return',
    validSolutions: ['[::-1]', 'reversed', 'return s[::-1]'],
    solution: 'def reverse_string(s):\n    return s[::-1]',
    explanation: 'Python slicing with [::-1] reverses a string.',
    hint: 'Try using string slicing with [::-1].'
  },
  {
    id: 'python-003',
    language: 'Python',
    title: 'FizzBuzz',
    difficulty: 'Medium',
    description: 'Print numbers 1 to 100, but for multiples of 3 print "Fizz", for multiples of 5 print "Buzz", and for multiples of both print "FizzBuzz".',
    examples: [
      { input: 'n = 15', output: '1, 2, Fizz, 4, Buzz, Fizz, 7, 8, Fizz, Buzz, 11, Fizz, 13, 14, FizzBuzz' }
    ],
    starterCode: 'def fizz_buzz(n):\n    # Write your code here\n    pass',
    expectedOutput: 'fizzbuzz',
    validSolutions: ['% 15 == 0', 'FizzBuzz', '% 3 == 0', 'Fizz', '% 5 == 0', 'Buzz'],
    solution: `def fizz_buzz(n):
    result = []
    for i in range(1, n + 1):
        if i % 15 == 0:
            result.append("FizzBuzz")
        elif i % 3 == 0:
            result.append("Fizz")
        elif i % 5 == 0:
            result.append("Buzz")
        else:
            result.append(str(i))
    return result`,
    explanation: 'Check divisibility by 15 first, then 3, then 5.',
    hint: 'Use modulo operator (%) to check divisibility.'
  },

  // JavaScript Problems
  {
    id: 'js-001',
    language: 'JavaScript',
    title: 'Find Maximum Number',
    difficulty: 'Easy',
    description: 'Write a function to find the maximum number in an array.',
    examples: [
      { input: '[1, 3, 2, 8, 5]', output: '8' }
    ],
    starterCode: 'function findMax(arr) {\n    // Write your code here\n}',
    expectedOutput: 'return',
    validSolutions: ['Math.max', 'Math.max(...arr)', 'Math.max.apply'],
    solution: 'function findMax(arr) {\n    return Math.max(...arr);\n}',
    explanation: 'Use Math.max with spread operator to find maximum.',
    hint: 'Try using Math.max() with the spread operator (...).'
  },
  {
    id: 'js-002',
    language: 'JavaScript',
    title: 'Count Vowels',
    difficulty: 'Medium',
    description: 'Write a function to count the number of vowels in a string.',
    examples: [
      { input: '"hello world"', output: '3' }
    ],
    starterCode: 'function countVowels(str) {\n    // Write your code here\n}',
    expectedOutput: 'return',
    validSolutions: ['match(/[aeiou]/gi)', 'includes', 'aeiou', 'length'],
    solution: `function countVowels(str) {
    const vowels = str.match(/[aeiou]/gi);
    return vowels ? vowels.length : 0;
}`,
    explanation: 'Use regex to match vowels and return the count.',
    hint: 'Try using regex /[aeiou]/gi to match vowels.'
  },

  // More problems for different difficulties
  {
    id: 'python-004',
    language: 'Python',
    title: 'Binary Search',
    difficulty: 'Hard',
    description: 'Implement binary search algorithm to find target in sorted array.',
    examples: [
      { input: 'arr = [1,2,3,4,5,6], target = 4', output: '3' }
    ],
    starterCode: 'def binary_search(arr, target):\n    # Write your code here\n    pass',
    expectedOutput: 'return',
    validSolutions: ['left = 0', 'right = len', 'mid = (left + right)', 'arr[mid] == target'],
    solution: `def binary_search(arr, target):
    left, right = 0, len(arr) - 1
    while left <= right:
        mid = (left + right) // 2
        if arr[mid] == target:
            return mid
        elif arr[mid] < target:
            left = mid + 1
        else:
            right = mid - 1
    return -1`,
    explanation: 'Divide search space in half each iteration.',
    hint: 'Use left and right pointers to narrow down the search space.'
  },

  {
    id: 'sql-004',
    language: 'SQL',
    title: 'Join Tables',
    difficulty: 'Hard',
    description: 'Write a query to join employees and departments tables to show employee names with their department names.',
    examples: [
      { input: 'employees(id, name, dept_id), departments(id, dept_name)', output: 'name | dept_name' }
    ],
    starterCode: '-- Write your SQL query here\n',
    expectedOutput: 'join',
    validSolutions: ['JOIN departments', 'INNER JOIN', 'employees.dept_id = departments.id'],
    solution: `SELECT e.name, d.dept_name 
FROM employees e 
INNER JOIN departments d ON e.dept_id = d.id;`,
    explanation: 'Use INNER JOIN to combine data from two tables based on a relationship.',
    hint: 'Use INNER JOIN with ON clause to connect related tables.'
  },

  // 25 NEW SQL PROBLEMS
  {
    id: 'sql-005',
    language: 'SQL',
    title: 'Find Highest Salary',
    difficulty: 'Easy',
    description: 'Write a query to find the employee with the highest salary.',
    examples: [
      { input: 'employees(id, name, salary)', output: 'Max salary employee' }
    ],
    starterCode: '-- Write your SQL query here\n',
    expectedOutput: 'MAX(salary)',
    validSolutions: ['MAX(salary)', 'ORDER BY salary DESC', 'LIMIT 1'],
    solution: 'SELECT * FROM employees WHERE salary = (SELECT MAX(salary) FROM employees);',
    explanation: 'Use MAX() function or ORDER BY with LIMIT.',
    hint: 'Use MAX(salary) in a subquery or ORDER BY salary DESC LIMIT 1.'
  },

  {
    id: 'sql-006',
    language: 'SQL',
    title: 'Average Salary by Department',
    difficulty: 'Medium',
    description: 'Calculate the average salary for each department.',
    examples: [
      { input: 'employees(id, name, dept_id, salary)', output: 'dept_id | avg_salary' }
    ],
    starterCode: '-- Write your SQL query here\n',
    expectedOutput: 'AVG(salary)',
    validSolutions: ['AVG(salary)', 'GROUP BY dept_id'],
    solution: 'SELECT dept_id, AVG(salary) as avg_salary FROM employees GROUP BY dept_id;',
    explanation: 'Use AVG() with GROUP BY to calculate average per group.',
    hint: 'Use AVG(salary) and GROUP BY dept_id.'
  },

  {
    id: 'sql-007',
    language: 'SQL',
    title: 'Employees Hired This Year',
    difficulty: 'Easy',
    description: 'Find all employees hired in the current year.',
    examples: [
      { input: 'employees(id, name, hire_date)', output: 'Employees hired in 2024' }
    ],
    starterCode: '-- Write your SQL query here\n',
    expectedOutput: 'YEAR(hire_date)',
    validSolutions: ['YEAR(hire_date) = YEAR(CURDATE())', 'EXTRACT(YEAR', 'WHERE hire_date'],
    solution: 'SELECT * FROM employees WHERE YEAR(hire_date) = YEAR(CURDATE());',
    explanation: 'Use YEAR() function to extract year from date.',
    hint: 'Use YEAR(hire_date) = YEAR(CURDATE()).'
  },

  {
    id: 'sql-008',
    language: 'SQL',
    title: 'Top 5 Highest Paid',
    difficulty: 'Easy',
    description: 'Get the top 5 highest paid employees.',
    examples: [
      { input: 'employees(id, name, salary)', output: 'Top 5 by salary' }
    ],
    starterCode: '-- Write your SQL query here\n',
    expectedOutput: 'ORDER BY salary DESC LIMIT 5',
    validSolutions: ['ORDER BY salary DESC', 'LIMIT 5'],
    solution: 'SELECT * FROM employees ORDER BY salary DESC LIMIT 5;',
    explanation: 'Use ORDER BY DESC with LIMIT.',
    hint: 'Use ORDER BY salary DESC LIMIT 5.'
  },

  {
    id: 'sql-009',
    language: 'SQL',
    title: 'Duplicate Email Check',
    difficulty: 'Medium',
    description: 'Find all duplicate email addresses in the users table.',
    examples: [
      { input: 'users(id, name, email)', output: 'Emails that appear more than once' }
    ],
    starterCode: '-- Write your SQL query here\n',
    expectedOutput: 'HAVING COUNT',
    validSolutions: ['GROUP BY email', 'HAVING COUNT(*) > 1'],
    solution: 'SELECT email, COUNT(*) FROM users GROUP BY email HAVING COUNT(*) > 1;',
    explanation: 'Use GROUP BY with HAVING to filter grouped results.',
    hint: 'Use GROUP BY email and HAVING COUNT(*) > 1.'
  },

  {
    id: 'sql-010',
    language: 'SQL',
    title: 'Update Employee Salary',
    difficulty: 'Easy',
    description: 'Increase salary by 10% for employees in the IT department.',
    examples: [
      { input: 'employees(id, name, salary, department)', output: 'Updated IT salaries' }
    ],
    starterCode: '-- Write your SQL query here\n',
    expectedOutput: 'UPDATE',
    validSolutions: ['UPDATE employees SET', 'salary = salary * 1.1', 'WHERE department = "IT"'],
    solution: 'UPDATE employees SET salary = salary * 1.1 WHERE department = "IT";',
    explanation: 'Use UPDATE with SET and WHERE clauses.',
    hint: 'Use UPDATE table SET column = new_value WHERE condition.'
  },

  {
    id: 'sql-011',
    language: 'SQL',
    title: 'Left Join Query',
    difficulty: 'Medium',
    description: 'Show all departments and their employees (including departments with no employees).',
    examples: [
      { input: 'departments(id, name), employees(id, name, dept_id)', output: 'All depts with/without employees' }
    ],
    starterCode: '-- Write your SQL query here\n',
    expectedOutput: 'LEFT JOIN',
    validSolutions: ['LEFT JOIN employees', 'departments.id = employees.dept_id'],
    solution: 'SELECT d.name as dept_name, e.name as emp_name FROM departments d LEFT JOIN employees e ON d.id = e.dept_id;',
    explanation: 'LEFT JOIN includes all records from left table.',
    hint: 'Use LEFT JOIN to include all departments.'
  },

  {
    id: 'sql-012',
    language: 'SQL',
    title: 'Subquery Practice',
    difficulty: 'Hard',
    description: 'Find employees earning more than the average salary.',
    examples: [
      { input: 'employees(id, name, salary)', output: 'Above average earners' }
    ],
    starterCode: '-- Write your SQL query here\n',
    expectedOutput: 'SELECT AVG(salary)',
    validSolutions: ['WHERE salary > (SELECT AVG(salary)', 'subquery'],
    solution: 'SELECT * FROM employees WHERE salary > (SELECT AVG(salary) FROM employees);',
    explanation: 'Use subquery to calculate average, then filter.',
    hint: 'Use WHERE salary > (SELECT AVG(salary) FROM employees).'
  },

  {
    id: 'sql-013',
    language: 'SQL',
    title: 'Date Range Query',
    difficulty: 'Medium',
    description: 'Find orders placed in the last 30 days.',
    examples: [
      { input: 'orders(id, customer_id, order_date)', output: 'Recent orders' }
    ],
    starterCode: '-- Write your SQL query here\n',
    expectedOutput: 'DATE_SUB',
    validSolutions: ['WHERE order_date >=', 'DATE_SUB(CURDATE(), INTERVAL 30 DAY)', 'NOW()'],
    solution: 'SELECT * FROM orders WHERE order_date >= DATE_SUB(CURDATE(), INTERVAL 30 DAY);',
    explanation: 'Use DATE_SUB to subtract days from current date.',
    hint: 'Use DATE_SUB(CURDATE(), INTERVAL 30 DAY).'
  },

  {
    id: 'sql-014',
    language: 'SQL',
    title: 'Case Statement',
    difficulty: 'Medium',
    description: 'Categorize employees as Senior (>50k), Mid (30-50k), or Junior (<30k) based on salary.',
    examples: [
      { input: 'employees(id, name, salary)', output: 'name | salary | category' }
    ],
    starterCode: '-- Write your SQL query here\n',
    expectedOutput: 'CASE WHEN',
    validSolutions: ['CASE WHEN salary > 50000', 'WHEN salary >= 30000', 'ELSE'],
    solution: `SELECT name, salary, 
CASE 
  WHEN salary > 50000 THEN 'Senior'
  WHEN salary >= 30000 THEN 'Mid'
  ELSE 'Junior'
END as category
FROM employees;`,
    explanation: 'Use CASE WHEN for conditional logic.',
    hint: 'Use CASE WHEN salary > 50000 THEN "Senior"...'
  },

  {
    id: 'sql-015',
    language: 'SQL',
    title: 'Window Function - Row Number',
    difficulty: 'Hard',
    description: 'Rank employees by salary within each department.',
    examples: [
      { input: 'employees(id, name, salary, dept_id)', output: 'Ranked employees per dept' }
    ],
    starterCode: '-- Write your SQL query here\n',
    expectedOutput: 'ROW_NUMBER()',
    validSolutions: ['ROW_NUMBER() OVER', 'PARTITION BY dept_id', 'ORDER BY salary DESC'],
    solution: 'SELECT name, dept_id, salary, ROW_NUMBER() OVER (PARTITION BY dept_id ORDER BY salary DESC) as rank FROM employees;',
    explanation: 'Use window function with PARTITION BY.',
    hint: 'Use ROW_NUMBER() OVER (PARTITION BY dept_id ORDER BY salary DESC).'
  },

  {
    id: 'sql-016',
    language: 'SQL',
    title: 'NULL Value Handling',
    difficulty: 'Easy',
    description: 'Find employees with missing phone numbers.',
    examples: [
      { input: 'employees(id, name, phone)', output: 'Employees with NULL phone' }
    ],
    starterCode: '-- Write your SQL query here\n',
    expectedOutput: 'IS NULL',
    validSolutions: ['WHERE phone IS NULL', 'IS NULL'],
    solution: 'SELECT * FROM employees WHERE phone IS NULL;',
    explanation: 'Use IS NULL to check for NULL values.',
    hint: 'Use WHERE phone IS NULL.'
  },

  {
    id: 'sql-017',
    language: 'SQL',
    title: 'String Functions',
    difficulty: 'Medium',
    description: 'Find employees whose name starts with "A" and contains exactly 5 characters.',
    examples: [
      { input: 'employees(id, name)', output: '5-letter names starting with A' }
    ],
    starterCode: '-- Write your SQL query here\n',
    expectedOutput: 'LENGTH',
    validSolutions: ['WHERE name LIKE "A%"', 'LENGTH(name) = 5', 'CHAR_LENGTH'],
    solution: 'SELECT * FROM employees WHERE name LIKE "A%" AND LENGTH(name) = 5;',
    explanation: 'Use LIKE for pattern matching and LENGTH for character count.',
    hint: 'Use name LIKE "A%" AND LENGTH(name) = 5.'
  },

  {
    id: 'sql-018',
    language: 'SQL',
    title: 'Self Join',
    difficulty: 'Hard',
    description: 'Find employees who earn more than their manager.',
    examples: [
      { input: 'employees(id, name, salary, manager_id)', output: 'Employees earning > manager' }
    ],
    starterCode: '-- Write your SQL query here\n',
    expectedOutput: 'self join',
    validSolutions: ['e1.salary > e2.salary', 'employees e1', 'employees e2', 'e1.manager_id = e2.id'],
    solution: 'SELECT e1.name FROM employees e1 JOIN employees e2 ON e1.manager_id = e2.id WHERE e1.salary > e2.salary;',
    explanation: 'Join table with itself using different aliases.',
    hint: 'Join employees table with itself using aliases.'
  },

  {
    id: 'sql-019',
    language: 'SQL',
    title: 'Union Query',
    difficulty: 'Medium',
    description: 'Combine active and inactive customers into one result set.',
    examples: [
      { input: 'active_customers(id, name), inactive_customers(id, name)', output: 'All customers combined' }
    ],
    starterCode: '-- Write your SQL query here\n',
    expectedOutput: 'UNION',
    validSolutions: ['UNION', 'SELECT * FROM active_customers', 'SELECT * FROM inactive_customers'],
    solution: 'SELECT id, name FROM active_customers UNION SELECT id, name FROM inactive_customers;',
    explanation: 'Use UNION to combine results from multiple queries.',
    hint: 'Use UNION to combine SELECT statements.'
  },

  {
    id: 'sql-020',
    language: 'SQL',
    title: 'Aggregate with HAVING',
    difficulty: 'Medium',
    description: 'Find departments with more than 5 employees.',
    examples: [
      { input: 'employees(id, name, dept_id)', output: 'Departments with >5 employees' }
    ],
    starterCode: '-- Write your SQL query here\n',
    expectedOutput: 'HAVING COUNT',
    validSolutions: ['GROUP BY dept_id', 'HAVING COUNT(*) > 5'],
    solution: 'SELECT dept_id, COUNT(*) as emp_count FROM employees GROUP BY dept_id HAVING COUNT(*) > 5;',
    explanation: 'Use HAVING to filter grouped results.',
    hint: 'Use GROUP BY dept_id and HAVING COUNT(*) > 5.'
  },

  {
    id: 'sql-021',
    language: 'SQL',
    title: 'Correlated Subquery',
    difficulty: 'Hard',
    description: 'Find the highest paid employee in each department.',
    examples: [
      { input: 'employees(id, name, salary, dept_id)', output: 'Top earner per department' }
    ],
    starterCode: '-- Write your SQL query here\n',
    expectedOutput: 'correlated subquery',
    validSolutions: ['WHERE salary = (SELECT MAX(salary)', 'WHERE e2.dept_id = e1.dept_id'],
    solution: 'SELECT * FROM employees e1 WHERE salary = (SELECT MAX(salary) FROM employees e2 WHERE e2.dept_id = e1.dept_id);',
    explanation: 'Subquery references outer query column.',
    hint: 'Use correlated subquery comparing dept_id.'
  },

  {
    id: 'sql-022',
    language: 'SQL',
    title: 'Insert with Select',
    difficulty: 'Easy',
    description: 'Copy all IT employees to a backup table.',
    examples: [
      { input: 'employees(id, name, dept), backup_employees(id, name, dept)', output: 'IT employees copied' }
    ],
    starterCode: '-- Write your SQL query here\n',
    expectedOutput: 'INSERT INTO',
    validSolutions: ['INSERT INTO backup_employees', 'SELECT * FROM employees', 'WHERE dept = "IT"'],
    solution: 'INSERT INTO backup_employees SELECT * FROM employees WHERE dept = "IT";',
    explanation: 'Use INSERT with SELECT to copy filtered data.',
    hint: 'Use INSERT INTO table SELECT * FROM source WHERE condition.'
  },

  {
    id: 'sql-023',
    language: 'SQL',
    title: 'Multiple Joins',
    difficulty: 'Hard',
    description: 'Show employee names, department names, and project names they work on.',
    examples: [
      { input: 'employees, departments, projects, employee_projects tables', output: 'Complete employee info' }
    ],
    starterCode: '-- Write your SQL query here\n',
    expectedOutput: 'multiple joins',
    validSolutions: ['JOIN departments', 'JOIN employee_projects', 'JOIN projects'],
    solution: `SELECT e.name, d.dept_name, p.project_name 
FROM employees e 
JOIN departments d ON e.dept_id = d.id 
JOIN employee_projects ep ON e.id = ep.emp_id 
JOIN projects p ON ep.project_id = p.id;`,
    explanation: 'Chain multiple JOIN operations.',
    hint: 'Join employees → departments → employee_projects → projects.'
  },

  {
    id: 'sql-024',
    language: 'SQL',
    title: 'Conditional Aggregation',
    difficulty: 'Medium',
    description: 'Count male and female employees in each department.',
    examples: [
      { input: 'employees(id, name, gender, dept_id)', output: 'dept_id | male_count | female_count' }
    ],
    starterCode: '-- Write your SQL query here\n',
    expectedOutput: 'SUM(CASE WHEN',
    validSolutions: ['SUM(CASE WHEN gender = "M"', 'SUM(CASE WHEN gender = "F"', 'GROUP BY dept_id'],
    solution: `SELECT dept_id, 
SUM(CASE WHEN gender = 'M' THEN 1 ELSE 0 END) as male_count,
SUM(CASE WHEN gender = 'F' THEN 1 ELSE 0 END) as female_count
FROM employees GROUP BY dept_id;`,
    explanation: 'Use conditional aggregation with CASE statements.',
    hint: 'Use SUM(CASE WHEN gender = "M" THEN 1 ELSE 0 END).'
  },

  {
    id: 'sql-025',
    language: 'SQL',
    title: 'Date Calculations',
    difficulty: 'Medium',
    description: 'Calculate employee age and years of service.',
    examples: [
      { input: 'employees(id, name, birth_date, hire_date)', output: 'name | age | years_service' }
    ],
    starterCode: '-- Write your SQL query here\n',
    expectedOutput: 'DATEDIFF',
    validSolutions: ['DATEDIFF(CURDATE(), birth_date)', 'DATEDIFF(CURDATE(), hire_date)', 'DIV 365'],
    solution: `SELECT name, 
FLOOR(DATEDIFF(CURDATE(), birth_date) / 365) as age,
FLOOR(DATEDIFF(CURDATE(), hire_date) / 365) as years_service
FROM employees;`,
    explanation: 'Use DATEDIFF to calculate date differences.',
    hint: 'Use DATEDIFF(CURDATE(), date_column) / 365 for years.'
  },

  {
    id: 'sql-026',
    language: 'SQL',
    title: 'Recursive CTE',
    difficulty: 'Hard',
    description: 'Find all employees in a manager hierarchy.',
    examples: [
      { input: 'employees(id, name, manager_id)', output: 'Complete hierarchy tree' }
    ],
    starterCode: '-- Write your SQL query here\n',
    expectedOutput: 'WITH RECURSIVE',
    validSolutions: ['WITH RECURSIVE', 'UNION ALL', 'manager_id IS NULL'],
    solution: `WITH RECURSIVE hierarchy AS (
  SELECT id, name, manager_id, 0 as level FROM employees WHERE manager_id IS NULL
  UNION ALL
  SELECT e.id, e.name, e.manager_id, h.level + 1 
  FROM employees e JOIN hierarchy h ON e.manager_id = h.id
) SELECT * FROM hierarchy;`,
    explanation: 'Use recursive CTE to traverse hierarchy.',
    hint: 'Start with top managers (manager_id IS NULL) then recursively join.'
  },

  {
    id: 'sql-027',
    language: 'SQL',
    title: 'Pivot Data',
    difficulty: 'Hard',
    description: 'Transform rows of sales data into columns by month.',
    examples: [
      { input: 'sales(id, month, amount)', output: 'Jan | Feb | Mar columns' }
    ],
    starterCode: '-- Write your SQL query here\n',
    expectedOutput: 'SUM(CASE WHEN',
    validSolutions: ['SUM(CASE WHEN month = "Jan"', 'SUM(CASE WHEN month = "Feb"', 'SUM(CASE WHEN month = "Mar"'],
    solution: `SELECT 
SUM(CASE WHEN month = 'Jan' THEN amount ELSE 0 END) as Jan,
SUM(CASE WHEN month = 'Feb' THEN amount ELSE 0 END) as Feb,
SUM(CASE WHEN month = 'Mar' THEN amount ELSE 0 END) as Mar
FROM sales;`,
    explanation: 'Use conditional aggregation to pivot rows to columns.',
    hint: 'Use SUM(CASE WHEN month = "Jan" THEN amount ELSE 0 END).'
  },

  {
    id: 'sql-028',
    language: 'SQL',
    title: 'Running Total',
    difficulty: 'Hard',
    description: 'Calculate running total of sales by date.',
    examples: [
      { input: 'sales(id, sale_date, amount)', output: 'date | amount | running_total' }
    ],
    starterCode: '-- Write your SQL query here\n',
    expectedOutput: 'SUM() OVER',
    validSolutions: ['SUM(amount) OVER', 'ORDER BY sale_date', 'ROWS UNBOUNDED PRECEDING'],
    solution: 'SELECT sale_date, amount, SUM(amount) OVER (ORDER BY sale_date ROWS UNBOUNDED PRECEDING) as running_total FROM sales;',
    explanation: 'Use window function with running sum.',
    hint: 'Use SUM(amount) OVER (ORDER BY sale_date ROWS UNBOUNDED PRECEDING).'
  },

  {
    id: 'sql-029',
    language: 'SQL',
    title: 'Data Quality Check',
    difficulty: 'Medium',
    description: 'Find records with invalid email formats (must contain @ and .).',
    examples: [
      { input: 'users(id, name, email)', output: 'Users with invalid emails' }
    ],
    starterCode: '-- Write your SQL query here\n',
    expectedOutput: 'NOT LIKE',
    validSolutions: ['WHERE email NOT LIKE "%@%.%"', 'NOT REGEXP', 'email NOT LIKE'],
    solution: 'SELECT * FROM users WHERE email NOT LIKE "%@%.%";',
    explanation: 'Use pattern matching to validate email format.',
    hint: 'Use WHERE email NOT LIKE "%@%.%".'
  },

  // 25 NEW PYTHON PROBLEMS
  {
    id: 'python-005',
    language: 'Python',
    title: 'Palindrome Check',
    difficulty: 'Easy',
    description: 'Check if a string is a palindrome (reads same forwards and backwards).',
    examples: [
      { input: '"racecar"', output: 'True' }
    ],
    starterCode: 'def is_palindrome(s):\n    # Write your code here\n    pass',
    expectedOutput: 'return',
    validSolutions: ['s == s[::-1]', 's.lower()', 'return s =='],
    solution: 'def is_palindrome(s):\n    return s.lower() == s.lower()[::-1]',
    explanation: 'Compare string with its reverse.',
    hint: 'Compare the string with s[::-1].'
  },

  {
    id: 'python-006',
    language: 'Python',
    title: 'Fibonacci Sequence',
    difficulty: 'Medium',
    description: 'Generate the first n numbers in the Fibonacci sequence.',
    examples: [
      { input: 'n = 7', output: '[0, 1, 1, 2, 3, 5, 8]' }
    ],
    starterCode: 'def fibonacci(n):\n    # Write your code here\n    pass',
    expectedOutput: 'return',
    validSolutions: ['a, b = 0, 1', 'a, b = b, a + b', 'for i in range'],
    solution: `def fibonacci(n):
    if n <= 0: return []
    if n == 1: return [0]
    fib = [0, 1]
    for i in range(2, n):
        fib.append(fib[i-1] + fib[i-2])
    return fib`,
    explanation: 'Build sequence by adding previous two numbers.',
    hint: 'Start with [0, 1] and keep adding sum of last two numbers.'
  },

  {
    id: 'python-007',
    language: 'Python',
    title: 'Prime Number Check',
    difficulty: 'Medium',
    description: 'Check if a number is prime.',
    examples: [
      { input: '17', output: 'True' }
    ],
    starterCode: 'def is_prime(n):\n    # Write your code here\n    pass',
    expectedOutput: 'return',
    validSolutions: ['if n < 2', 'for i in range(2', 'n % i == 0'],
    solution: `def is_prime(n):
    if n < 2: return False
    for i in range(2, int(n**0.5) + 1):
        if n % i == 0:
            return False
    return True`,
    explanation: 'Check divisibility up to square root of n.',
    hint: 'Check if n is divisible by any number from 2 to sqrt(n).'
  },

  {
    id: 'python-008',
    language: 'Python',
    title: 'List Comprehension',
    difficulty: 'Easy',
    description: 'Create a list of squares of even numbers from 1 to 10.',
    examples: [
      { input: 'range(1, 11)', output: '[4, 16, 36, 64, 100]' }
    ],
    starterCode: 'def even_squares():\n    # Write your code here\n    pass',
    expectedOutput: 'return',
    validSolutions: ['x**2 for x in', 'if x % 2 == 0', 'range(1, 11)'],
    solution: 'def even_squares():\n    return [x**2 for x in range(1, 11) if x % 2 == 0]',
    explanation: 'Use list comprehension with condition.',
    hint: 'Use [x**2 for x in range(1, 11) if x % 2 == 0].'
  },

  {
    id: 'python-009',
    language: 'Python',
    title: 'Dictionary Merge',
    difficulty: 'Easy',
    description: 'Merge two dictionaries into one.',
    examples: [
      { input: 'd1 = {"a": 1}, d2 = {"b": 2}', output: '{"a": 1, "b": 2}' }
    ],
    starterCode: 'def merge_dicts(d1, d2):\n    # Write your code here\n    pass',
    expectedOutput: 'return',
    validSolutions: ['{**d1, **d2}', 'd1.update(d2)', 'dict(d1, **d2)'],
    solution: 'def merge_dicts(d1, d2):\n    return {**d1, **d2}',
    explanation: 'Use dictionary unpacking to merge.',
    hint: 'Use {**d1, **d2} or dict.update().'
  },

  {
    id: 'python-010',
    language: 'Python',
    title: 'Remove Duplicates',
    difficulty: 'Easy',
    description: 'Remove duplicates from a list while preserving order.',
    examples: [
      { input: '[1, 2, 2, 3, 1, 4]', output: '[1, 2, 3, 4]' }
    ],
    starterCode: 'def remove_duplicates(lst):\n    # Write your code here\n    pass',
    expectedOutput: 'return',
    validSolutions: ['list(dict.fromkeys(lst))', 'seen = set()', 'if x not in seen'],
    solution: 'def remove_duplicates(lst):\n    return list(dict.fromkeys(lst))',
    explanation: 'Use dict.fromkeys() to preserve order.',
    hint: 'Use list(dict.fromkeys(lst)) or track seen items with set.'
  },

  {
    id: 'python-011',
    language: 'Python',
    title: 'Anagram Check',
    difficulty: 'Medium',
    description: 'Check if two strings are anagrams.',
    examples: [
      { input: '"listen", "silent"', output: 'True' }
    ],
    starterCode: 'def are_anagrams(s1, s2):\n    # Write your code here\n    pass',
    expectedOutput: 'return',
    validSolutions: ['sorted(s1.lower()) == sorted(s2.lower())', 'Counter', 'sorted'],
    solution: 'def are_anagrams(s1, s2):\n    return sorted(s1.lower()) == sorted(s2.lower())',
    explanation: 'Sort characters and compare.',
    hint: 'Sort both strings and compare: sorted(s1) == sorted(s2).'
  },

  {
    id: 'python-012',
    language: 'Python',
    title: 'Factorial',
    difficulty: 'Easy',
    description: 'Calculate factorial of a number.',
    examples: [
      { input: '5', output: '120' }
    ],
    starterCode: 'def factorial(n):\n    # Write your code here\n    pass',
    expectedOutput: 'return',
    validSolutions: ['if n <= 1: return 1', 'n * factorial(n-1)', 'math.factorial'],
    solution: `def factorial(n):
    if n <= 1:
        return 1
    return n * factorial(n-1)`,
    explanation: 'Use recursion: n! = n × (n-1)!',
    hint: 'Use recursion: factorial(n) = n * factorial(n-1).'
  },

  {
    id: 'python-013',
    language: 'Python',
    title: 'Find Missing Number',
    difficulty: 'Medium',
    description: 'Find the missing number in an array of consecutive integers.',
    examples: [
      { input: '[1, 2, 4, 5, 6]', output: '3' }
    ],
    starterCode: 'def find_missing(nums):\n    # Write your code here\n    pass',
    expectedOutput: 'return',
    validSolutions: ['sum(range(min(nums), max(nums)+1)) - sum(nums)', 'set(range', 'difference'],
    solution: 'def find_missing(nums):\n    return sum(range(min(nums), max(nums)+1)) - sum(nums)',
    explanation: 'Calculate expected sum minus actual sum.',
    hint: 'Find difference between expected sum and actual sum.'
  },

  {
    id: 'python-014',
    language: 'Python',
    title: 'Word Counter',
    difficulty: 'Medium',
    description: 'Count frequency of each word in a sentence.',
    examples: [
      { input: '"hello world hello"', output: '{"hello": 2, "world": 1}' }
    ],
    starterCode: 'def word_count(sentence):\n    # Write your code here\n    pass',
    expectedOutput: 'return',
    validSolutions: ['Counter(sentence.split())', 'for word in', 'dict[word] = dict.get(word, 0) + 1'],
    solution: `def word_count(sentence):
    words = sentence.lower().split()
    count = {}
    for word in words:
        count[word] = count.get(word, 0) + 1
    return count`,
    explanation: 'Split sentence and count each word.',
    hint: 'Use dict.get(word, 0) + 1 to count occurrences.'
  },

  {
    id: 'python-015',
    language: 'Python',
    title: 'Matrix Transpose',
    difficulty: 'Medium',
    description: 'Transpose a 2D matrix (swap rows and columns).',
    examples: [
      { input: '[[1,2,3],[4,5,6]]', output: '[[1,4],[2,5],[3,6]]' }
    ],
    starterCode: 'def transpose(matrix):\n    # Write your code here\n    pass',
    expectedOutput: 'return',
    validSolutions: ['list(zip(*matrix))', 'for j in range(len(matrix[0]))', 'for i in range(len(matrix))'],
    solution: 'def transpose(matrix):\n    return list(list(row) for row in zip(*matrix))',
    explanation: 'Use zip(*matrix) to transpose.',
    hint: 'Use zip(*matrix) to swap rows and columns.'
  },

  {
    id: 'python-016',
    language: 'Python',
    title: 'Merge Sorted Lists',
    difficulty: 'Medium',
    description: 'Merge two sorted lists into one sorted list.',
    examples: [
      { input: '[1,3,5], [2,4,6]', output: '[1,2,3,4,5,6]' }
    ],
    starterCode: 'def merge_sorted(list1, list2):\n    # Write your code here\n    pass',
    expectedOutput: 'return',
    validSolutions: ['while i < len(list1) and j < len(list2)', 'if list1[i] < list2[j]', 'extend'],
    solution: `def merge_sorted(list1, list2):
    result = []
    i = j = 0
    while i < len(list1) and j < len(list2):
        if list1[i] < list2[j]:
            result.append(list1[i])
            i += 1
        else:
            result.append(list2[j])
            j += 1
    result.extend(list1[i:])
    result.extend(list2[j:])
    return result`,
    explanation: 'Use two pointers to merge efficiently.',
    hint: 'Use two pointers to compare elements from both lists.'
  },

  {
    id: 'python-017',
    language: 'Python',
    title: 'Longest Common Prefix',
    difficulty: 'Medium',
    description: 'Find the longest common prefix among array of strings.',
    examples: [
      { input: '["flower","flow","flight"]', output: '"fl"' }
    ],
    starterCode: 'def longest_prefix(strs):\n    # Write your code here\n    pass',
    expectedOutput: 'return',
    validSolutions: ['min(strs, key=len)', 'for i, char in enumerate', 'if not strs[i].startswith'],
    solution: `def longest_prefix(strs):
    if not strs: return ""
    prefix = strs[0]
    for s in strs[1:]:
        while not s.startswith(prefix):
            prefix = prefix[:-1]
            if not prefix: return ""
    return prefix`,
    explanation: 'Start with first string and trim until common.',
    hint: 'Start with first string, trim until all strings start with it.'
  },

  {
    id: 'python-018',
    language: 'Python',
    title: 'Valid Parentheses',
    difficulty: 'Medium',
    description: 'Check if parentheses are balanced in a string.',
    examples: [
      { input: '"({[]})"', output: 'True' }
    ],
    starterCode: 'def valid_parentheses(s):\n    # Write your code here\n    pass',
    expectedOutput: 'return',
    validSolutions: ['stack = []', 'stack.append', 'stack.pop()'],
    solution: `def valid_parentheses(s):
    stack = []
    mapping = {')': '(', '}': '{', ']': '['}
    for char in s:
        if char in mapping:
            if not stack or stack.pop() != mapping[char]:
                return False
        else:
            stack.append(char)
    return not stack`,
    explanation: 'Use stack to track opening brackets.',
    hint: 'Use stack to match opening and closing brackets.'
  },

  {
    id: 'python-019',
    language: 'Python',
    title: 'Quick Sort',
    difficulty: 'Hard',
    description: 'Implement quicksort algorithm.',
    examples: [
      { input: '[3,6,8,10,1,2,1]', output: '[1,1,2,3,6,8,10]' }
    ],
    starterCode: 'def quicksort(arr):\n    # Write your code here\n    pass',
    expectedOutput: 'return',
    validSolutions: ['if len(arr) <= 1', 'pivot = arr[0]', 'quicksort(left) + [pivot] + quicksort(right)'],
    solution: `def quicksort(arr):
    if len(arr) <= 1:
        return arr
    pivot = arr[0]
    left = [x for x in arr[1:] if x < pivot]
    right = [x for x in arr[1:] if x >= pivot]
    return quicksort(left) + [pivot] + quicksort(right)`,
    explanation: 'Divide around pivot and recursively sort.',
    hint: 'Choose pivot, partition array, recursively sort parts.'
  },

  {
    id: 'python-020',
    language: 'Python',
    title: 'LRU Cache',
    difficulty: 'Hard',
    description: 'Implement a Least Recently Used (LRU) cache.',
    examples: [
      { input: 'capacity=2, operations: put(1,1), put(2,2), get(1)', output: 'LRU behavior' }
    ],
    starterCode: 'class LRUCache:\n    def __init__(self, capacity):\n        # Write your code here\n        pass',
    expectedOutput: 'class',
    validSolutions: ['from collections import OrderedDict', 'self.cache = OrderedDict()', 'move_to_end'],
    solution: `from collections import OrderedDict
class LRUCache:
    def __init__(self, capacity):
        self.capacity = capacity
        self.cache = OrderedDict()
    
    def get(self, key):
        if key in self.cache:
            self.cache.move_to_end(key)
            return self.cache[key]
        return -1
    
    def put(self, key, value):
        if key in self.cache:
            self.cache.move_to_end(key)
        self.cache[key] = value
        if len(self.cache) > self.capacity:
            self.cache.popitem(last=False)`,
    explanation: 'Use OrderedDict for O(1) operations.',
    hint: 'Use OrderedDict with move_to_end() for LRU behavior.'
  },

  {
    id: 'python-021',
    language: 'Python',
    title: 'Generate Permutations',
    difficulty: 'Hard',
    description: 'Generate all permutations of a list.',
    examples: [
      { input: '[1,2,3]', output: '[[1,2,3],[1,3,2],[2,1,3],[2,3,1],[3,1,2],[3,2,1]]' }
    ],
    starterCode: 'def permutations(nums):\n    # Write your code here\n    pass',
    expectedOutput: 'return',
    validSolutions: ['from itertools import permutations', 'backtrack', 'if len(path) == len(nums)'],
    solution: `def permutations(nums):
    result = []
    def backtrack(path):
        if len(path) == len(nums):
            result.append(path[:])
            return
        for num in nums:
            if num not in path:
                path.append(num)
                backtrack(path)
                path.pop()
    backtrack([])
    return result`,
    explanation: 'Use backtracking to generate all permutations.',
    hint: 'Use backtracking: add element, recurse, remove element.'
  },

  {
    id: 'python-022',
    language: 'Python',
    title: 'Coin Change',
    difficulty: 'Hard',
    description: 'Find minimum coins needed to make amount.',
    examples: [
      { input: 'coins=[1,3,4], amount=6', output: '2 (3+3)' }
    ],
    starterCode: 'def coin_change(coins, amount):\n    # Write your code here\n    pass',
    expectedOutput: 'return',
    validSolutions: ['dp = [float("inf")] * (amount + 1)', 'dp[0] = 0', 'min(dp[i], dp[i-coin] + 1)'],
    solution: `def coin_change(coins, amount):
    dp = [float('inf')] * (amount + 1)
    dp[0] = 0
    for i in range(1, amount + 1):
        for coin in coins:
            if i >= coin:
                dp[i] = min(dp[i], dp[i - coin] + 1)
    return dp[amount] if dp[amount] != float('inf') else -1`,
    explanation: 'Use dynamic programming to find minimum coins.',
    hint: 'Use DP: dp[i] = min coins needed for amount i.'
  },

  {
    id: 'python-023',
    language: 'Python',
    title: 'Climbing Stairs',
    difficulty: 'Easy',
    description: 'Find number of ways to climb n stairs (1 or 2 steps at a time).',
    examples: [
      { input: 'n=3', output: '3 ways' }
    ],
    starterCode: 'def climb_stairs(n):\n    # Write your code here\n    pass',
    expectedOutput: 'return',
    validSolutions: ['if n <= 2: return n', 'a, b = 1, 2', 'a, b = b, a + b'],
    solution: `def climb_stairs(n):
    if n <= 2: return n
    a, b = 1, 2
    for i in range(3, n + 1):
        a, b = b, a + b
    return b`,
    explanation: 'Each step is sum of previous two (Fibonacci-like).',
    hint: 'Similar to Fibonacci: ways(n) = ways(n-1) + ways(n-2).'
  },

  {
    id: 'python-024',
    language: 'Python',
    title: 'Group Anagrams',
    difficulty: 'Medium',
    description: 'Group strings that are anagrams of each other.',
    examples: [
      { input: '["eat","tea","tan","ate","nat","bat"]', output: '[["eat","tea","ate"],["tan","nat"],["bat"]]' }
    ],
    starterCode: 'def group_anagrams(strs):\n    # Write your code here\n    pass',
    expectedOutput: 'return',
    validSolutions: ['from collections import defaultdict', 'key = tuple(sorted(word))', 'groups[key].append'],
    solution: `def group_anagrams(strs):
    from collections import defaultdict
    groups = defaultdict(list)
    for word in strs:
        key = tuple(sorted(word))
        groups[key].append(word)
    return list(groups.values())`,
    explanation: 'Group by sorted character tuple.',
    hint: 'Use sorted characters as key to group anagrams.'
  },

  {
    id: 'python-025',
    language: 'Python',
    title: 'Roman to Integer',
    difficulty: 'Easy',
    description: 'Convert Roman numerals to integer.',
    examples: [
      { input: '"MCMLIV"', output: '1954' }
    ],
    starterCode: 'def roman_to_int(s):\n    # Write your code here\n    pass',
    expectedOutput: 'return',
    validSolutions: ['roman = {"I": 1, "V": 5', 'if i < len(s) - 1 and roman[s[i]] < roman[s[i+1]]', 'total += roman[char]'],
    solution: `def roman_to_int(s):
    roman = {"I": 1, "V": 5, "X": 10, "L": 50, "C": 100, "D": 500, "M": 1000}
    total = 0
    for i, char in enumerate(s):
        if i < len(s) - 1 and roman[char] < roman[s[i+1]]:
            total -= roman[char]
        else:
            total += roman[char]
    return total`,
    explanation: 'Subtract when current < next, otherwise add.',
    hint: 'If current Roman numeral < next, subtract it; otherwise add.'
  },

  {
    id: 'python-026',
    language: 'Python',
    title: 'Product Except Self',
    difficulty: 'Medium',
    description: 'Return array where each element is product of all others except itself.',
    examples: [
      { input: '[1,2,3,4]', output: '[24,12,8,6]' }
    ],
    starterCode: 'def product_except_self(nums):\n    # Write your code here\n    pass',
    expectedOutput: 'return',
    validSolutions: ['result = [1] * len(nums)', 'result[i] *= left', 'result[i] *= right'],
    solution: `def product_except_self(nums):
    n = len(nums)
    result = [1] * n
    # Left products
    for i in range(1, n):
        result[i] = result[i-1] * nums[i-1]
    # Right products
    right = 1
    for i in range(n-1, -1, -1):
        result[i] *= right
        right *= nums[i]
    return result`,
    explanation: 'Two passes: left products then right products.',
    hint: 'Calculate left products, then multiply by right products.'
  },

  {
    id: 'python-027',
    language: 'Python',
    title: 'Merge Intervals',
    difficulty: 'Hard',
    description: 'Merge overlapping intervals.',
    examples: [
      { input: '[[1,3],[2,6],[8,10],[15,18]]', output: '[[1,6],[8,10],[15,18]]' }
    ],
    starterCode: 'def merge_intervals(intervals):\n    # Write your code here\n    pass',
    expectedOutput: 'return',
    validSolutions: ['intervals.sort(key=lambda x: x[0])', 'if merged[-1][1] >= interval[0]', 'merged[-1][1] = max'],
    solution: `def merge_intervals(intervals):
    if not intervals: return []
    intervals.sort(key=lambda x: x[0])
    merged = [intervals[0]]
    for interval in intervals[1:]:
        if merged[-1][1] >= interval[0]:
            merged[-1][1] = max(merged[-1][1], interval[1])
        else:
            merged.append(interval)
    return merged`,
    explanation: 'Sort by start time, merge overlapping intervals.',
    hint: 'Sort intervals, merge when current start <= previous end.'
  },

  {
    id: 'python-028',
    language: 'Python',
    title: 'House Robber',
    difficulty: 'Medium',
    description: 'Find max money that can be robbed without robbing adjacent houses.',
    examples: [
      { input: '[2,7,9,3,1]', output: '12 (2+9+1)' }
    ],
    starterCode: 'def rob(nums):\n    # Write your code here\n    pass',
    expectedOutput: 'return',
    validSolutions: ['prev1, prev2 = 0, 0', 'temp = prev1', 'prev1 = max(prev2 + num, prev1)'],
    solution: `def rob(nums):
    prev1 = prev2 = 0
    for num in nums:
        temp = prev1
        prev1 = max(prev2 + num, prev1)
        prev2 = temp
    return prev1`,
    explanation: 'DP: max of (rob current + prev2) or (skip current).',
    hint: 'Use DP: max(rob current + two_back, one_back).'
  },

  {
    id: 'python-029',
    language: 'Python',
    title: 'Design Twitter',
    difficulty: 'Hard',
    description: 'Design a simplified Twitter with post tweet, follow, unfollow, get news feed.',
    examples: [
      { input: 'Twitter operations', output: 'Working Twitter class' }
    ],
    starterCode: 'class Twitter:\n    def __init__(self):\n        # Write your code here\n        pass',
    expectedOutput: 'class',
    validSolutions: ['from collections import defaultdict', 'self.tweets = []', 'self.following = defaultdict(set)'],
    solution: `from collections import defaultdict
import heapq
class Twitter:
    def __init__(self):
        self.tweets = []
        self.following = defaultdict(set)
        self.time = 0
    
    def postTweet(self, userId, tweetId):
        self.tweets.append((self.time, tweetId, userId))
        self.time += 1
    
    def getNewsFeed(self, userId):
        candidates = []
        for time, tweetId, authorId in self.tweets:
            if authorId == userId or authorId in self.following[userId]:
                candidates.append((-time, tweetId))
        candidates.sort()
        return [tweetId for _, tweetId in candidates[:10]]
    
    def follow(self, followerId, followeeId):
        self.following[followerId].add(followeeId)
    
    def unfollow(self, followerId, followeeId):
        self.following[followerId].discard(followeeId)`,
    explanation: 'Store tweets with timestamp, filter by following.',
    hint: 'Store tweets with time, use following set for filtering.'
  },

  // 25 NEW JAVASCRIPT PROBLEMS
  {
    id: 'js-003',
    language: 'JavaScript',
    title: 'Array Sum',
    difficulty: 'Easy',
    description: 'Calculate the sum of all numbers in an array.',
    examples: [
      { input: '[1, 2, 3, 4, 5]', output: '15' }
    ],
    starterCode: 'function arraySum(arr) {\n    // Write your code here\n}',
    expectedOutput: 'return',
    validSolutions: ['reduce((a, b) => a + b)', 'reduce', 'sum += arr[i]'],
    solution: 'function arraySum(arr) {\n    return arr.reduce((sum, num) => sum + num, 0);\n}',
    explanation: 'Use reduce to accumulate sum.',
    hint: 'Use arr.reduce((sum, num) => sum + num, 0).'
  },

  {
    id: 'js-004',
    language: 'JavaScript',
    title: 'Reverse Array',
    difficulty: 'Easy',
    description: 'Reverse an array without using built-in reverse method.',
    examples: [
      { input: '[1, 2, 3, 4]', output: '[4, 3, 2, 1]' }
    ],
    starterCode: 'function reverseArray(arr) {\n    // Write your code here\n}',
    expectedOutput: 'return',
    validSolutions: ['for (let i = arr.length - 1', 'arr.unshift(arr.pop())', 'temp = arr[i]'],
    solution: `function reverseArray(arr) {
    const result = [];
    for (let i = arr.length - 1; i >= 0; i--) {
        result.push(arr[i]);
    }
    return result;
}`,
    explanation: 'Iterate backwards and build new array.',
    hint: 'Loop from end to start and build new array.'
  },

  {
    id: 'js-005',
    language: 'JavaScript',
    title: 'Object Property Counter',
    difficulty: 'Easy',
    description: 'Count the number of properties in an object.',
    examples: [
      { input: '{name: "John", age: 30, city: "NYC"}', output: '3' }
    ],
    starterCode: 'function countProperties(obj) {\n    // Write your code here\n}',
    expectedOutput: 'return',
    validSolutions: ['Object.keys(obj).length', 'Object.keys', 'for (let key in obj)'],
    solution: 'function countProperties(obj) {\n    return Object.keys(obj).length;\n}',
    explanation: 'Use Object.keys() to get property names.',
    hint: 'Use Object.keys(obj).length.'
  },

  {
    id: 'js-006',
    language: 'JavaScript',
    title: 'Filter Even Numbers',
    difficulty: 'Easy',
    description: 'Filter out even numbers from an array.',
    examples: [
      { input: '[1, 2, 3, 4, 5, 6]', output: '[2, 4, 6]' }
    ],
    starterCode: 'function filterEvens(arr) {\n    // Write your code here\n}',
    expectedOutput: 'return',
    validSolutions: ['filter(num => num % 2 === 0)', 'filter', '% 2 === 0'],
    solution: 'function filterEvens(arr) {\n    return arr.filter(num => num % 2 === 0);\n}',
    explanation: 'Use filter with modulo operator.',
    hint: 'Use arr.filter(num => num % 2 === 0).'
  },

  {
    id: 'js-007',
    language: 'JavaScript',
    title: 'String Capitalization',
    difficulty: 'Easy',
    description: 'Capitalize the first letter of each word in a string.',
    examples: [
      { input: '"hello world javascript"', output: '"Hello World Javascript"' }
    ],
    starterCode: 'function capitalize(str) {\n    // Write your code here\n}',
    expectedOutput: 'return',
    validSolutions: ['split(" ").map', 'charAt(0).toUpperCase()', 'slice(1).toLowerCase()'],
    solution: `function capitalize(str) {
    return str.split(' ').map(word => 
        word.charAt(0).toUpperCase() + word.slice(1).toLowerCase()
    ).join(' ');
}`,
    explanation: 'Split into words, capitalize each, then join.',
    hint: 'Split by space, map with charAt(0).toUpperCase().'
  },

  {
    id: 'js-008',
    language: 'JavaScript',
    title: 'Remove Falsy Values',
    difficulty: 'Easy',
    description: 'Remove all falsy values from an array.',
    examples: [
      { input: '[0, 1, false, 2, "", 3]', output: '[1, 2, 3]' }
    ],
    starterCode: 'function removeFalsy(arr) {\n    // Write your code here\n}',
    expectedOutput: 'return',
    validSolutions: ['filter(Boolean)', 'filter(item => item)', 'filter(x => !!x)'],
    solution: 'function removeFalsy(arr) {\n    return arr.filter(Boolean);\n}',
    explanation: 'Use filter with Boolean constructor.',
    hint: 'Use arr.filter(Boolean) or arr.filter(item => !!item).'
  },

  {
    id: 'js-009',
    language: 'JavaScript',
    title: 'Array Chunk',
    difficulty: 'Medium',
    description: 'Split an array into chunks of specified size.',
    examples: [
      { input: '[1,2,3,4,5,6], size=2', output: '[[1,2],[3,4],[5,6]]' }
    ],
    starterCode: 'function chunkArray(arr, size) {\n    // Write your code here\n}',
    expectedOutput: 'return',
    validSolutions: ['for (let i = 0; i < arr.length; i += size)', 'slice(i, i + size)', 'push(arr.slice'],
    solution: `function chunkArray(arr, size) {
    const chunks = [];
    for (let i = 0; i < arr.length; i += size) {
        chunks.push(arr.slice(i, i + size));
    }
    return chunks;
}`,
    explanation: 'Loop by chunk size and slice subarrays.',
    hint: 'Loop with i += size, push arr.slice(i, i + size).'
  },

  {
    id: 'js-010',
    language: 'JavaScript',
    title: 'Deep Clone Object',
    difficulty: 'Medium',
    description: 'Create a deep copy of an object.',
    examples: [
      { input: '{a: 1, b: {c: 2}}', output: 'Independent copy' }
    ],
    starterCode: 'function deepClone(obj) {\n    // Write your code here\n}',
    expectedOutput: 'return',
    validSolutions: ['JSON.parse(JSON.stringify(obj))', 'typeof obj === "object"', 'Array.isArray(obj)'],
    solution: `function deepClone(obj) {
    if (obj === null || typeof obj !== 'object') return obj;
    if (Array.isArray(obj)) return obj.map(deepClone);
    const cloned = {};
    for (let key in obj) {
        cloned[key] = deepClone(obj[key]);
    }
    return cloned;
}`,
    explanation: 'Recursively clone objects and arrays.',
    hint: 'Use recursion or JSON.parse(JSON.stringify(obj)) for simple cases.'
  },

  {
    id: 'js-011',
    language: 'JavaScript',
    title: 'Flatten Array',
    difficulty: 'Medium',
    description: 'Flatten a nested array to one level.',
    examples: [
      { input: '[1, [2, 3], [4, [5, 6]]]', output: '[1, 2, 3, 4, [5, 6]]' }
    ],
    starterCode: 'function flattenArray(arr) {\n    // Write your code here\n}',
    expectedOutput: 'return',
    validSolutions: ['concat.apply([], arr)', 'arr.flat()', '[].concat(...arr)'],
    solution: 'function flattenArray(arr) {\n    return [].concat(...arr);\n}',
    explanation: 'Use spread operator with concat.',
    hint: 'Use [].concat(...arr) or arr.flat(1).'
  },

  {
    id: 'js-012',
    language: 'JavaScript',
    title: 'Debounce Function',
    difficulty: 'Hard',
    description: 'Implement a debounce function that delays execution.',
    examples: [
      { input: 'function, 300ms delay', output: 'Debounced function' }
    ],
    starterCode: 'function debounce(func, delay) {\n    // Write your code here\n}',
    expectedOutput: 'return',
    validSolutions: ['let timeoutId', 'clearTimeout(timeoutId)', 'setTimeout(() => func.apply(this, args)'],
    solution: `function debounce(func, delay) {
    let timeoutId;
    return function(...args) {
        clearTimeout(timeoutId);
        timeoutId = setTimeout(() => func.apply(this, args), delay);
    };
}`,
    explanation: 'Clear previous timeout, set new one.',
    hint: 'Use setTimeout and clearTimeout to delay execution.'
  },

  {
    id: 'js-013',
    language: 'JavaScript',
    title: 'Event Emitter',
    difficulty: 'Hard',
    description: 'Implement a simple event emitter with on, off, and emit methods.',
    examples: [
      { input: 'EventEmitter class', output: 'Working event system' }
    ],
    starterCode: 'class EventEmitter {\n    constructor() {\n        // Write your code here\n    }\n}',
    expectedOutput: 'class',
    validSolutions: ['this.events = {}', 'this.events[event] = this.events[event] || []', 'forEach(callback => callback'],
    solution: `class EventEmitter {
    constructor() {
        this.events = {};
    }
    
    on(event, callback) {
        this.events[event] = this.events[event] || [];
        this.events[event].push(callback);
    }
    
    off(event, callback) {
        if (this.events[event]) {
            this.events[event] = this.events[event].filter(cb => cb !== callback);
        }
    }
    
    emit(event, ...args) {
        if (this.events[event]) {
            this.events[event].forEach(callback => callback(...args));
        }
    }
}`,
    explanation: 'Store callbacks in object, execute on emit.',
    hint: 'Use object to store event callbacks, iterate on emit.'
  },

  {
    id: 'js-014',
    language: 'JavaScript',
    title: 'Curry Function',
    difficulty: 'Hard',
    description: 'Implement function currying.',
    examples: [
      { input: 'curry(add)(1)(2)(3)', output: '6' }
    ],
    starterCode: 'function curry(fn) {\n    // Write your code here\n}',
    expectedOutput: 'return',
    validSolutions: ['return function curried(...args)', 'args.length >= fn.length', 'fn.apply(this, args)'],
    solution: `function curry(fn) {
    return function curried(...args) {
        if (args.length >= fn.length) {
            return fn.apply(this, args);
        } else {
            return function(...nextArgs) {
                return curried(...args, ...nextArgs);
            };
        }
    };
}`,
    explanation: 'Return function until all arguments collected.',
    hint: 'Check if enough args, otherwise return function for more.'
  },

  {
    id: 'js-015',
    language: 'JavaScript',
    title: 'Promise.all Implementation',
    difficulty: 'Hard',
    description: 'Implement your own version of Promise.all.',
    examples: [
      { input: '[Promise1, Promise2, Promise3]', output: 'Array of resolved values' }
    ],
    starterCode: 'function promiseAll(promises) {\n    // Write your code here\n}',
    expectedOutput: 'return',
    validSolutions: ['return new Promise((resolve, reject)', 'results[index] = value', 'resolvedCount === promises.length'],
    solution: `function promiseAll(promises) {
    return new Promise((resolve, reject) => {
        if (promises.length === 0) resolve([]);
        
        const results = [];
        let resolvedCount = 0;
        
        promises.forEach((promise, index) => {
            Promise.resolve(promise).then(value => {
                results[index] = value;
                resolvedCount++;
                
                if (resolvedCount === promises.length) {
                    resolve(results);
                }
            }).catch(reject);
        });
    });
}`,
    explanation: 'Wait for all promises, resolve with results array.',
    hint: 'Track resolved count, resolve when all complete.'
  },

  {
    id: 'js-016',
    language: 'JavaScript',
    title: 'Binary Search',
    difficulty: 'Medium',
    description: 'Implement binary search algorithm.',
    examples: [
      { input: '[1,2,3,4,5], target=3', output: '2' }
    ],
    starterCode: 'function binarySearch(arr, target) {\n    // Write your code here\n}',
    expectedOutput: 'return',
    validSolutions: ['let left = 0, right = arr.length - 1', 'let mid = Math.floor((left + right) / 2)', 'arr[mid] === target'],
    solution: `function binarySearch(arr, target) {
    let left = 0, right = arr.length - 1;
    
    while (left <= right) {
        let mid = Math.floor((left + right) / 2);
        
        if (arr[mid] === target) return mid;
        else if (arr[mid] < target) left = mid + 1;
        else right = mid - 1;
    }
    
    return -1;
}`,
    explanation: 'Divide search space in half each iteration.',
    hint: 'Use left/right pointers, compare with middle element.'
  },

  {
    id: 'js-017',
    language: 'JavaScript',
    title: 'Throttle Function',
    difficulty: 'Medium',
    description: 'Implement a throttle function that limits execution frequency.',
    examples: [
      { input: 'function, 1000ms limit', output: 'Throttled function' }
    ],
    starterCode: 'function throttle(func, limit) {\n    // Write your code here\n}',
    expectedOutput: 'return',
    validSolutions: ['let inThrottle', 'if (!inThrottle)', 'setTimeout(() => inThrottle = false'],
    solution: `function throttle(func, limit) {
    let inThrottle;
    return function(...args) {
        if (!inThrottle) {
            func.apply(this, args);
            inThrottle = true;
            setTimeout(() => inThrottle = false, limit);
        }
    };
}`,
    explanation: 'Execute immediately, then wait for limit period.',
    hint: 'Use flag to track if in throttle period.'
  },

  {
    id: 'js-018',
    language: 'JavaScript',
    title: 'Memoization',
    difficulty: 'Medium',
    description: 'Implement function memoization for caching results.',
    examples: [
      { input: 'expensive function', output: 'Cached results' }
    ],
    starterCode: 'function memoize(fn) {\n    // Write your code here\n}',
    expectedOutput: 'return',
    validSolutions: ['const cache = {}', 'const key = JSON.stringify(args)', 'cache[key] = fn.apply(this, args)'],
    solution: `function memoize(fn) {
    const cache = {};
    return function(...args) {
        const key = JSON.stringify(args);
        if (key in cache) {
            return cache[key];
        }
        return cache[key] = fn.apply(this, args);
    };
}`,
    explanation: 'Cache function results by arguments.',
    hint: 'Use object to cache results by stringified arguments.'
  },

  {
    id: 'js-019',
    language: 'JavaScript',
    title: 'Observer Pattern',
    difficulty: 'Hard',
    description: 'Implement the Observer pattern.',
    examples: [
      { input: 'Subject and Observer classes', output: 'Working observer pattern' }
    ],
    starterCode: 'class Subject {\n    constructor() {\n        // Write your code here\n    }\n}',
    expectedOutput: 'class',
    validSolutions: ['this.observers = []', 'this.observers.push(observer)', 'observer.update(data)'],
    solution: `class Subject {
    constructor() {
        this.observers = [];
    }
    
    subscribe(observer) {
        this.observers.push(observer);
    }
    
    unsubscribe(observer) {
        this.observers = this.observers.filter(obs => obs !== observer);
    }
    
    notify(data) {
        this.observers.forEach(observer => observer.update(data));
    }
}

class Observer {
    constructor(name) {
        this.name = name;
    }
    
    update(data) {
        console.log(\`\${this.name} received: \${data}\`);
    }
}`,
    explanation: 'Subject maintains observers list, notifies on changes.',
    hint: 'Store observers in array, iterate and call update method.'
  },

  {
    id: 'js-020',
    language: 'JavaScript',
    title: 'LRU Cache',
    difficulty: 'Hard',
    description: 'Implement Least Recently Used cache.',
    examples: [
      { input: 'capacity=2, operations', output: 'LRU behavior' }
    ],
    starterCode: 'class LRUCache {\n    constructor(capacity) {\n        // Write your code here\n    }\n}',
    expectedOutput: 'class',
    validSolutions: ['this.cache = new Map()', 'this.cache.delete(key)', 'this.cache.set(key, value)'],
    solution: `class LRUCache {
    constructor(capacity) {
        this.capacity = capacity;
        this.cache = new Map();
    }
    
    get(key) {
        if (this.cache.has(key)) {
            const value = this.cache.get(key);
            this.cache.delete(key);
            this.cache.set(key, value);
            return value;
        }
        return -1;
    }
    
    put(key, value) {
        if (this.cache.has(key)) {
            this.cache.delete(key);
        } else if (this.cache.size >= this.capacity) {
            const firstKey = this.cache.keys().next().value;
            this.cache.delete(firstKey);
        }
        this.cache.set(key, value);
    }
}`,
    explanation: 'Use Map for insertion order, delete and re-insert for LRU.',
    hint: 'Use Map, delete and re-set to update order.'
  },

  {
    id: 'js-021',
    language: 'JavaScript',
    title: 'Async/Await Retry',
    difficulty: 'Hard',
    description: 'Implement retry mechanism for async functions.',
    examples: [
      { input: 'async function, 3 retries', output: 'Function with retry logic' }
    ],
    starterCode: 'async function retry(fn, retries = 3) {\n    // Write your code here\n}',
    expectedOutput: 'return',
    validSolutions: ['for (let i = 0; i < retries', 'try { return await fn()', 'catch (error)'],
    solution: `async function retry(fn, retries = 3, delay = 1000) {
    for (let i = 0; i < retries; i++) {
        try {
            return await fn();
        } catch (error) {
            if (i === retries - 1) throw error;
            await new Promise(resolve => setTimeout(resolve, delay));
        }
    }
}`,
    explanation: 'Try function, wait on error, retry until limit.',
    hint: 'Loop with try/catch, delay between retries.'
  },

  {
    id: 'js-022',
    language: 'JavaScript',
    title: 'Custom Bind',
    difficulty: 'Medium',
    description: 'Implement your own version of Function.prototype.bind.',
    examples: [
      { input: 'function.myBind(context, ...args)', output: 'Bound function' }
    ],
    starterCode: 'Function.prototype.myBind = function(context, ...args) {\n    // Write your code here\n}',
    expectedOutput: 'return',
    validSolutions: ['const self = this', 'return function(...newArgs)', 'self.apply(context'],
    solution: `Function.prototype.myBind = function(context, ...args) {
    const self = this;
    return function(...newArgs) {
        return self.apply(context, [...args, ...newArgs]);
    };
}`,
    explanation: 'Return function that applies original with bound context.',
    hint: 'Store reference to original function, return wrapper function.'
  },

  {
    id: 'js-023',
    language: 'JavaScript',
    title: 'Intersection Observer',
    difficulty: 'Medium',
    description: 'Create a function to observe when elements enter viewport.',
    examples: [
      { input: 'DOM element', output: 'Visibility detection' }
    ],
    starterCode: 'function createIntersectionObserver(callback, options = {}) {\n    // Write your code here\n}',
    expectedOutput: 'return',
    validSolutions: ['new IntersectionObserver', 'entries.forEach', 'isIntersecting'],
    solution: `function createIntersectionObserver(callback, options = {}) {
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                callback(entry.target, entry);
            }
        });
    }, {
        threshold: options.threshold || 0.1,
        rootMargin: options.rootMargin || '0px'
    });
    
    return {
        observe: (element) => observer.observe(element),
        unobserve: (element) => observer.unobserve(element),
        disconnect: () => observer.disconnect()
    };
}`,
    explanation: 'Wrap IntersectionObserver API for easy use.',
    hint: 'Use IntersectionObserver API with isIntersecting check.'
  },

  {
    id: 'js-024',
    language: 'JavaScript',
    title: 'Virtual DOM Diff',
    difficulty: 'Hard',
    description: 'Implement a simple virtual DOM diffing algorithm.',
    examples: [
      { input: 'oldVNode, newVNode', output: 'Array of changes' }
    ],
    starterCode: 'function diff(oldVNode, newVNode) {\n    // Write your code here\n}',
    expectedOutput: 'return',
    validSolutions: ['if (oldVNode.type !== newVNode.type)', 'oldVNode.props !== newVNode.props', 'type: "UPDATE"'],
    solution: `function diff(oldVNode, newVNode, patches = [], path = []) {
    if (!oldVNode) {
        patches.push({ type: 'CREATE', path, vNode: newVNode });
    } else if (!newVNode) {
        patches.push({ type: 'REMOVE', path });
    } else if (oldVNode.type !== newVNode.type) {
        patches.push({ type: 'REPLACE', path, vNode: newVNode });
    } else {
        // Check props
        const propPatches = diffProps(oldVNode.props, newVNode.props);
        if (propPatches.length > 0) {
            patches.push({ type: 'PROPS', path, patches: propPatches });
        }
        
        // Diff children
        const maxLength = Math.max(
            oldVNode.children?.length || 0,
            newVNode.children?.length || 0
        );
        
        for (let i = 0; i < maxLength; i++) {
            diff(
                oldVNode.children?.[i],
                newVNode.children?.[i],
                patches,
                [...path, i]
            );
        }
    }
    
    return patches;
}`,
    explanation: 'Compare virtual DOM nodes recursively.',
    hint: 'Compare node types, props, then recursively diff children.'
  },

  {
    id: 'js-025',
    language: 'JavaScript',
    title: 'State Machine',
    difficulty: 'Hard',
    description: 'Implement a finite state machine.',
    examples: [
      { input: 'states and transitions', output: 'Working state machine' }
    ],
    starterCode: 'class StateMachine {\n    constructor(states, initialState) {\n        // Write your code here\n    }\n}',
    expectedOutput: 'class',
    validSolutions: ['this.states = states', 'this.currentState = initialState', 'this.states[this.currentState][action]'],
    solution: `class StateMachine {
    constructor(states, initialState) {
        this.states = states;
        this.currentState = initialState;
    }
    
    transition(action) {
        const currentStateConfig = this.states[this.currentState];
        const nextState = currentStateConfig[action];
        
        if (nextState) {
            this.currentState = nextState;
            return true;
        }
        
        return false;
    }
    
    getState() {
        return this.currentState;
    }
    
    canTransition(action) {
        const currentStateConfig = this.states[this.currentState];
        return !!currentStateConfig[action];
    }
}`,
    explanation: 'Track current state, transition based on actions.',
    hint: 'Store states object, transition based on current state and action.'
  },

  {
    id: 'js-026',
    language: 'JavaScript',
    title: 'Custom Promise',
    difficulty: 'Hard',
    description: 'Implement a basic Promise class.',
    examples: [
      { input: 'executor function', output: 'Working Promise implementation' }
    ],
    starterCode: 'class MyPromise {\n    constructor(executor) {\n        // Write your code here\n    }\n}',
    expectedOutput: 'class',
    validSolutions: ['this.state = "pending"', 'this.value = null', 'setTimeout(() => callback(this.value)'],
    solution: `class MyPromise {
    constructor(executor) {
        this.state = 'pending';
        this.value = null;
        this.handlers = [];
        
        const resolve = (value) => {
            if (this.state === 'pending') {
                this.state = 'fulfilled';
                this.value = value;
                this.handlers.forEach(handler => handler.onFulfilled(value));
            }
        };
        
        const reject = (reason) => {
            if (this.state === 'pending') {
                this.state = 'rejected';
                this.value = reason;
                this.handlers.forEach(handler => handler.onRejected(reason));
            }
        };
        
        try {
            executor(resolve, reject);
        } catch (error) {
            reject(error);
        }
    }
    
    then(onFulfilled, onRejected) {
        return new MyPromise((resolve, reject) => {
            const handle = () => {
                try {
                    if (this.state === 'fulfilled') {
                        const result = onFulfilled ? onFulfilled(this.value) : this.value;
                        resolve(result);
                    } else if (this.state === 'rejected') {
                        if (onRejected) {
                            const result = onRejected(this.value);
                            resolve(result);
                        } else {
                            reject(this.value);
                        }
                    }
                } catch (error) {
                    reject(error);
                }
            };
            
            if (this.state === 'pending') {
                this.handlers.push({
                    onFulfilled: handle,
                    onRejected: handle
                });
            } else {
                setTimeout(handle, 0);
            }
        });
    }
}`,
    explanation: 'Implement Promise states, handlers, and chaining.',
    hint: 'Track state (pending/fulfilled/rejected), store handlers, execute asynchronously.'
  },

  {
    id: 'js-027',
    language: 'JavaScript',
    title: 'Deep Equality Check',
    difficulty: 'Medium',
    description: 'Implement deep equality comparison for objects.',
    examples: [
      { input: '{a: {b: 1}}, {a: {b: 1}}', output: 'true' }
    ],
    starterCode: 'function deepEqual(obj1, obj2) {\n    // Write your code here\n}',
    expectedOutput: 'return',
    validSolutions: ['typeof obj1 === typeof obj2', 'Object.keys(obj1).length === Object.keys(obj2).length', 'deepEqual(obj1[key], obj2[key])'],
    solution: `function deepEqual(obj1, obj2) {
    if (obj1 === obj2) return true;
    
    if (obj1 == null || obj2 == null) return false;
    
    if (typeof obj1 !== typeof obj2) return false;
    
    if (typeof obj1 !== 'object') return obj1 === obj2;
    
    if (Array.isArray(obj1) !== Array.isArray(obj2)) return false;
    
    const keys1 = Object.keys(obj1);
    const keys2 = Object.keys(obj2);
    
    if (keys1.length !== keys2.length) return false;
    
    for (let key of keys1) {
        if (!keys2.includes(key)) return false;
        if (!deepEqual(obj1[key], obj2[key])) return false;
    }
    
    return true;
}`,
    explanation: 'Recursively compare object properties and values.',
    hint: 'Check types, then recursively compare all properties.'
  }
];

// Add practice problems to the main content items for the sidebar
window.practicePrograms = {
  'SQL': {
    name: 'SQL',
    image: 'https://raw.githubusercontent.com/StevenMKay/CareerSolutionsForToday/ae90f4fb10d0211b5042bfcd3b072a41dc9ce917/icons/sqlicon.png',
    problems: window.practiceProblems.filter(p => p.language === 'SQL')
  },
  'Python': {
    name: 'Python',
    image: 'https://raw.githubusercontent.com/StevenMKay/CareerSolutionsForToday/ae90f4fb10d0211b5042bfcd3b072a41dc9ce917/icons/generalicon.png',
    problems: window.practiceProblems.filter(p => p.language === 'Python')
  },
  'JavaScript': {
    name: 'JavaScript',
    image: 'https://github.com/StevenMKay/CareerSolutionsForToday/raw/bec276b558dc0f3049b3696abe7ef062e4cc4e0d/icons/javaicon.png',
    problems: window.practiceProblems.filter(p => p.language === 'JavaScript')
  }
};

console.log('Practice problems loaded:', window.practiceProblems.length, 'problems');
