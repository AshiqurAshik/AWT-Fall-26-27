function getStudentResult() {
  return new Promise((resolve, reject) => {
    console.log('Requesting Student Data....');

    setTimeout(() => {
      const success = true;

      if (success) {
        resolve({
          id: 101,
          name: 'Ashik',
          dept: 'CSE',
          marks: 85,
        });
      } else {
        reject('Error finding Result..');
      }
    }, 3000);
  });
}

async function displayStudent() {
  console.log('Getting Student Data...');
  try {
    const student = await getStudentResult();
    console.log('Student Data Received...');
    console.log('ID: ', student.id);
    console.log('Name: ', student.name);
    console.log('Marks: ', student.marks);
    console.log('Result Processing Completed..');
  } catch (error) {
    console.log('Error finding Student Data...', error);
  }
}

displayStudent();
