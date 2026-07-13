import { usePage } from '@inertiajs/react'
import React from 'react'

function Card() {
    const { student } = usePage().props;
    console.log(student);
    return (
        <>
            <div className="w-[280px] bg-white border-[4px] border-black shadow-lg overflow-hidden font-sans mx-auto">

                {/* Header */}
                <div className="relative">
                    <img
                        src="/images/computer_header.jpg"
                        className="w-full block"
                        alt=""
                    />

                    <img
                        src="/images/photo_frame.jpg"
                        className="w-full block -mt-1"
                        alt=""
                    />

                    {/* Student Photo */}
                    <div className="absolute left-1/2 top-[78px] -translate-x-1/2">
                        <div className="bg-white p-1 border-2 border-gray-500 shadow">
                            <img
                                src={`/storage/${student?.image}`}
                                className="w-[65px] h-[78px] object-cover"
                                alt=""
                            />
                        </div>
                    </div>
                </div>

                {/* Body */}
                <div className="pt-2 p-1">

                    <h2 className="text-center font-bold uppercase text-[22px]">
                        {student?.name}
                    </h2>

                    <table className="w-full mt-2 text-[12px] leading-5">
                        <tbody>

                            <tr>
                                <td className="w-[95px]">Enrollment No</td>
                                <td className="w-3">:</td>
                                <td>{student?.registration_no}</td>
                            </tr>

                            <tr>
                                <td>Father's Name</td>
                                <td>:</td>
                                <td>{student?.father_name}</td>
                            </tr>

                            <tr>
                                <td>Contact No</td>
                                <td>:</td>
                                <td>{student?.phone}</td>
                            </tr>

                            <tr>
                                <td>D.O.B</td>
                                <td>:</td>
                                <td>{student?.date_of_birth}</td>
                            </tr>

                            <tr>
                                <td className="align-top">Course</td>
                                <td className="align-top">:</td>
                                <td>
                                    <span className='uppercase'>
                                        {student?.course?.name}
                                    </span>
                                </td>
                            </tr>

                        </tbody>
                    </table>

                    <div className="text-center mt-4">
                        <div className="font-bold uppercase text-[14px]">
                            A.S.C NAME
                        </div>

                        <div className="uppercase text-[13px]">
                            {student?.institute?.center_name}
                        </div>
                    </div>

                </div>

                {/* Footer */}
                <img
                    src="/images/footer.jpg"
                    className="w-full block"
                    alt=""
                />

            </div>
        </>
    )
}

export default Card