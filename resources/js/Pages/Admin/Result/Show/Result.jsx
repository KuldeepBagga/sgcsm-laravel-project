import { usePage } from '@inertiajs/react'
import React from 'react'

function Result() {
    const { students } = usePage().props;

    const totalMinMarks = students[0]?.result_details[0]?.result.reduce(
        (sum, item) => sum + Number(item.min_marks),
        0
    )

    const totalMaxMarks = students[0]?.result_details[0]?.result.reduce(
        (sum, item) => sum + Number(item.max_marks),
        0
    )

    const totalMarksObtained = students[0]?.result_details[0]?.result?.reduce(
        (sum, item) => sum + Number(item.obtained_marks),
        0
    )

    const percentage = (totalMarksObtained / totalMaxMarks) * 100;

    let grade = "F";
    let division = "Fail";

    if (percentage >= 60) {
        grade = "A+";
        division = "1st Division";
    } else if (percentage >= 50) {
        grade = "B";
        division = "2nd Division";
    } else if (percentage >= 33) {
        grade = "C";
        division = "3rd Division";
    }

    const download = () => {
        const link = document.createElement('a');
        link.href = students?.[0]?.image
            ? `/storage/${students[0].image}`
            : '/images/default-user.png';

        link.download = 'student-photo.jpg';
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
    };
    return (
        <>
            {students.length > 0 ? (
                <div
                    style={{
                        width: "850px",
                        margin: "auto",
                        border: "1px solid #000",
                        padding: "2px",
                    }}
                >
                    <table width="100%" cellPadding="0" cellSpacing="0">
                        <tbody>
                            <tr>
                                <td>
                                    <img
                                        src={`/storage/${students[0]?.result_details[0].duplicate_marksheet}`}
                                        style={{ width: "100%" }}
                                        alt="Header"
                                    />
                                </td>
                            </tr>
                        </tbody>
                    </table>

                    <table width="100%" cellPadding="0" cellSpacing="0">
                        <tbody>
                            <tr>
                                <td width="690px">
                                    <table width="100%">
                                        <tbody>
                                            <tr>
                                                <td style={{ width: "140px" }} valign="top">
                                                    Student&apos;s Name
                                                </td>
                                                <td style={{ width: "300px" }} valign="top">
                                                    : {students[0].name.toUpperCase()}
                                                </td>
                                                <td style={{ width: "110px" }} valign="top">
                                                    Reg No.
                                                </td>
                                                <td style={{ width: "200px" }} valign="top">
                                                    : {students[0].registration_no.toUpperCase()}
                                                </td>
                                            </tr>

                                            <tr>
                                                {students[0].relation === 'W/O' ?
                                                    (
                                                        <>
                                                            <td valign="top">Husband&apos;s Name</td>
                                                            <td valign="top">: {students[0].husband_name.toUpperCase()}</td>
                                                        </>
                                                    ) :
                                                    (
                                                        <>
                                                            <td valign="top">Father&apos;s Name</td>
                                                            <td valign="top">: {students[0].father_name.toUpperCase()}</td>
                                                        </>
                                                    )
                                                }
                                                <td valign="top">Center Code</td>
                                                <td valign="top">: {students[0].center_code.toUpperCase()}</td>
                                            </tr>

                                            <tr>
                                                <td valign="top">Course</td>
                                                <td
                                                    valign="top"
                                                    colSpan={3}
                                                    style={{ color: "red" }}
                                                >
                                                    <span style={{ color: "#000" }}>:</span>
                                                    {" "}
                                                    {students[0].course.name.toUpperCase()}
                                                </td>
                                            </tr>

                                            <tr>
                                                <td valign="top">Center Name</td>
                                                <td
                                                    valign="top"
                                                    colSpan={3}
                                                    style={{ color: "red" }}
                                                >
                                                    <span style={{ color: "#000" }}>:</span>
                                                    {" "}
                                                    {students[0].institute.center_name.toUpperCase()}
                                                </td>
                                            </tr>

                                            <tr>
                                                <td valign="top">Center Address</td>
                                                <td colSpan={3} valign="top">
                                                    : {students[0].institute.address.toUpperCase()}
                                                </td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </td>

                                <td align="right" valign="top" style={{ padding: "5px" }}>
                                    <img
                                        onClick={download}
                                        src={students?.[0]?.image ? `/storage/${students[0].image}` : '/images/default-user.png'}
                                        style={{ width: "100px", border: "1px solid #000", borderRadius: 3 }}
                                        className="img-fluid img-thumbnail"
                                        alt="Student"
                                    />
                                    <div style={{ padding: "5px" }}>17/07/2005</div>
                                </td>
                            </tr>
                        </tbody>
                    </table>

                    <table
                        width="100%"
                        style={{
                            borderTop: "1px solid #000",
                            borderBottom: "1px solid #000",
                        }}
                        cellPadding="0"
                        cellSpacing="0"
                    >
                        <tbody>
                            <tr>
                                <td
                                    width="55%"
                                    className="marks"
                                    style={{ borderRight: "1px solid #000", paddingLeft: "10px" }}
                                >
                                    Paper
                                </td>

                                <td
                                    colSpan={2}
                                    className="marks"
                                    style={{
                                        borderRight: "1px solid #000",
                                        borderBottom: "1px solid #000",
                                        textAlign: "center"
                                    }}
                                >
                                    STATEMENT OF MARKS
                                </td>

                                <td className="marks" style={{ textAlign: "center" }}>Marks Obtained</td>
                            </tr>

                            <tr>
                                <td
                                    width="55%"
                                    style={{
                                        borderRight: "1px solid #000",
                                        borderBottom: "1px solid #000",
                                    }}
                                />

                                <td
                                    className="marks"
                                    style={{
                                        borderRight: "1px solid #000",
                                        borderBottom: "1px solid #000",
                                        textAlign: "center"
                                    }}
                                >
                                    Max
                                </td>

                                <td
                                    className="marks"
                                    style={{
                                        borderRight: "1px solid #000",
                                        borderBottom: "1px solid #000",
                                        textAlign: "center"
                                    }}
                                >
                                    Min
                                </td>

                                <td style={{ borderBottom: "1px solid #000" }} />
                            </tr>


                            {students[0]?.result_details[0]?.result?.map((item, index) => (
                                <tr key={index}>
                                    <td
                                        width="55%"
                                        style={{
                                            borderRight: "1px solid #000",
                                            padding: "5px",
                                        }}
                                    >
                                        {item.subject}
                                    </td>

                                    <td
                                        className="marks"
                                        style={{ borderRight: "1px solid #000", textAlign: 'center', padding: "5px", }}
                                    >
                                        {item.max_marks}
                                    </td>

                                    <td
                                        className="marks"
                                        style={{ borderRight: "1px solid #000", textAlign: 'center', padding: "5px", }}
                                    >
                                        {item.min_marks}
                                    </td>

                                    <td className="marks" style={{ textAlign: "center" }}>{item.obtained_marks}</td>
                                </tr>
                            ))}






                            <tr style={{ borderTop: "1px solid #000" }}>
                                <td style={{ borderRight: "1px solid #000" }}>
                                    <table
                                        width="100%"
                                        style={{ height: "100%" }}
                                    >
                                        <tbody>
                                            <tr>
                                                <td
                                                    width="40%"
                                                    style={{
                                                        borderRight: "1px solid #000",
                                                        borderBottom: "1px solid #000",
                                                        paddingLeft: "10px"
                                                    }}
                                                >
                                                    Total Marks Obtained
                                                </td>

                                                <td
                                                    style={{
                                                        borderRight: "1px solid #000",
                                                        textAlign: "center",
                                                        borderBottom: "1px solid #000",
                                                    }}
                                                >
                                                    {totalMarksObtained}
                                                </td>

                                                <td style={{ textAlign: "center" }}>
                                                    Grade {grade}
                                                </td>
                                            </tr>

                                            <tr>
                                                <td
                                                    style={{
                                                        borderRight: "1px solid #000",
                                                        paddingLeft: "10px"
                                                    }}
                                                >
                                                    Maximum Marks
                                                </td>

                                                <td
                                                    style={{
                                                        borderRight: "1px solid #000",
                                                        textAlign: "center",
                                                    }}
                                                >
                                                    {totalMaxMarks}
                                                </td>

                                                <td />
                                            </tr>
                                        </tbody>
                                    </table>
                                </td>

                                <td
                                    className="marks"
                                    style={{ borderRight: "1px solid #000", textAlign: "center" }}
                                >
                                    {totalMinMarks}
                                </td>

                                <td
                                    className="marks"
                                    style={{ borderRight: "1px solid #000", textAlign: "center" }}
                                >
                                    {totalMaxMarks}
                                </td>

                                <td className="marks">
                                    <div
                                        style={{
                                            width: "100%",
                                            borderBottom: "1px solid #000",
                                            textAlign: "center"
                                        }}
                                    >
                                        45
                                    </div>

                                    <div style={{ width: "100%", textAlign: "center" }}>
                                        {division}
                                    </div>
                                </td>
                            </tr>
                        </tbody>
                    </table>

                    <table width="100%">
                        <tbody>
                            <tr>
                                <td>
                                    <img
                                        src="https://sgcsmindia.org/uploads/static/documents/marksheet/marksheet/footer.jpg"
                                        style={{ width: "100%" }}
                                        alt="Footer"
                                    />
                                </td>
                            </tr>

                            <tr>
                                <td style={{ textAlign: "center" }}>
                                    Result Date : {new Date(students[0]?.result_details[0]?.result_date)
                                        .toLocaleDateString('en-GB')
                                        .replace(/\//g, '-')}
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            ) : (
                <>
                    no result found
                </>
            )
            }
        </>
    )
}

export default Result