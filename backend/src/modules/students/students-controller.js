const asyncHandler = require("express-async-handler");
const { getAllStudents, addNewStudent, getStudentDetail, setStudentStatus, updateStudent } = require("./students-service");

const handleGetAllStudents = asyncHandler(async (req, res) => {
  const allStudents = await getAllStudents();

  res.json({ students: allStudents });
});

const handleAddStudent = asyncHandler(async (req, res) => {
    const payload = req.body;

    const { message } = await addNewStudent(payload);

    return res.json({ message });
});

const handleUpdateStudent = asyncHandler(async (req, res) => {
    const { id } = req.params;

    const payload = req.body;

    const { message } = await updateStudent(id, payload);

    return res.json({ message });
});

const handleGetStudentDetail = asyncHandler(async (req, res) => {
    const { id } = req.params;

    const studentDetails = await getStudentDetail(id);

    return res.json(studentDetails);
});

const handleStudentStatus = asyncHandler(async (req, res) => {
    const { id: userId } = req.params;
    const { status } = req.body;
    const { userId: rewieverId } = req.user;

    const { message } = await setStudentStatus({ userId, status, rewieverId });

    return res.json({ message });
});

module.exports = {
    handleGetAllStudents,
    handleGetStudentDetail,
    handleAddStudent,
    handleStudentStatus,
    handleUpdateStudent,
};
