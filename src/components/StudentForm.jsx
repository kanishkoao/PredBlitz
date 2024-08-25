import { ref, set,push,onValue } from "firebase/database";
import { useState,useEffect } from "react";
import { database } from "../../config/firebase";


const StudentForm = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [serialNumber, setSerialNumber] = useState(0);

  useEffect(() => {
    const studentsRef = ref(database, 'students');
    onValue(studentsRef, (snapshot) => {
      const students = snapshot.val();
      if (students) {
        setSerialNumber(Object.keys(students).length + 1);
      } else {
        setSerialNumber(1);
      }
    });
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const studentData = {
      name: name,
      email: email
    };
    const studentRef = ref(database, `students/${serialNumber}`);
    await set(studentRef, studentData);
    setName('');
    setEmail('');
    setSerialNumber(serialNumber + 1); 
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label>Name:</label>
        <input type="text" value={name} onChange={(e) => setName(e.target.value)} required />
      </div>
      <div>
        <label>Email:</label>
        <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} required />
      </div>
      <button type="submit">Submit</button>
    </form>
  );
};

export default StudentForm;