function load() {
  let column_1 = [
    6, 4, 6, 7, 5, 10, 9, 10, 9, 2, 3, 7, 6, 2, 9, 1, 2, 4, 8, 4, 3, 4, 10, 1,
    7, 5, 5, 8, 7, 5,
  ];
  let column_2 = [
    8, 4, 3, 8, 10, 3, 8, 9, 1, 6, 9, 8, 1, 8, 2, 8, 4, 10, 9, 6, 2, 5, 7, 6, 5,
    10, 2, 8, 6, 1,
  ];
  let column_3 = [
    66, 88, 71, 58, 40, 89, 85, 59, 81, 49, 52, 73, 71, 47, 72, 72, 88, 64, 89,
    57, 43, 56, 54, 51, 46, 84, 54, 71, 43, 43,
  ];
  let column_4 = [
    95, 64, 100, 97, 74, 98, 58, 59, 92, 60, 50, 57, 80, 93, 81, 50, 95, 95, 78,
    44, 43, 73, 50, 56, 66, 73, 60, 98, 69, 90,
  ];

  let sum_1 = 0;
  for (let i = 0; i < column_1.length; i++) {
    sum_1 += column_1[i]
  }

  let sum_2 = 0;
  for (let i = 0; i < column_2.length; i++) {
    sum_2 += column_2[i]
  }

  let sum_3 = 0;
  for (let i = 0; i < column_3.length; i++) {
    sum_3 += column_3[i]
  }

  let sum_4 = 0;
  for (let i = 0; i < column_4.length; i++) {
    sum_4 += column_4[i]
  }

  let sums = [sum_1, sum_2, sum_3, sum_4]

  let total_score = sum_1 + sum_2 + sum_3 + sum_4

  const results = {
    column_1,
    column_2,
    column_3,
    column_4,
    sums,
    total_score
  }

  console.log(results);
}
